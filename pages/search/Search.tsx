import AppLayout from "../global/components/AppLayout";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { mockUsers } from "../test/mockUsers";
import MentorCard from "../global/components/MentorCard";
import { Row, Col, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

interface User {
  uId: number;
  Image: string;
  NickName: string;
  Description: string;
  isStudy: boolean;
  hashtag: string[];
}

export default function Search() {
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMoreResults, setHasMoreResults] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 12;

  const { query } = useRouter().query;
  const queryStr = String(query);

  useEffect(() => {
    setOffset(0);
    setHasMoreResults(true);
  }, [queryStr]);

  useEffect(() => {
    setLoading(true);
    const filteredResults = mockUsers.filter((user) => {
      const { NickName, Description, hashtag } = user;
      return (
        NickName.includes(queryStr) ||
        Description.includes(queryStr) ||
        hashtag.includes(queryStr)
      );
    });
    setSearchResults(filteredResults.slice(0, limit));
    setOffset(limit);
    setLoading(false);
  }, [queryStr, limit]);

  const fetchMoreData = () => {
    // TODO : APIServer 요청
    if (!hasMoreResults) {
      return;
    }
    setLoading(true);
    const filteredResults = mockUsers.filter((user) => {
      const { NickName, Description, hashtag } = user;
      return (
        NickName.includes(queryStr) ||
        Description.includes(queryStr) ||
        hashtag.includes(queryStr)
      );
    });
    const nextResults = filteredResults.slice(offset, offset + limit);
    if (nextResults.length < limit) {
      setHasMoreResults(false);
    }
    setSearchResults([...searchResults, ...nextResults]);
    setOffset(offset + limit);
    setLoading(false);
  };

  return (
    <AppLayout>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div style={{ color: "black" }}>검색어: {query}</div>

          {hasMoreResults && (
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <Spin />
            </div>
          )}
          <InfiniteScroll
            dataLength={searchResults.length}
            next={fetchMoreData}
            hasMore={hasMoreResults}
            loader={
              <div
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Spin />
              </div>
            }
          >
            <Row gutter={[16, 16]}>
              {searchResults.length > 0 ? (
                searchResults.map((user) => (
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={8}
                    xxl={6}
                    key={user.uId}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <MentorCard
                        key={user.uId}
                        image={user.Image}
                        description={user.Description}
                        userNickName={user.NickName}
                        hashtag={user.hashtag}
                      />
                    </div>
                  </Col>
                ))
              ) : (
                <div>검색 결과가 없습니다.</div>
              )}
            </Row>
          </InfiniteScroll>
        </>
      )}
    </AppLayout>
  );
}
