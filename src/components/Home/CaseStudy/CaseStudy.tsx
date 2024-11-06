"use client";

import { Col, Row, Spin } from "antd";
import { IoMdArrowForward } from "react-icons/io";
import "./style.css";

import { useFetchData } from "@/Hooks/useApi";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CaseStudy = () => {
  const [latestPostData, setLatestPostData] = useState<any[]>([]);

  const apiUrl = "https://simplai.ai/blogs/ghost/api/v4/content/posts/";
  const apiKey = "f964f7e99ba1fb40644c96a9c9";

  let { data, isError, error, isLoading, refetch, isRefetching } = useFetchData(
    `${apiUrl}?key=${apiKey}&limit=3&order=published_at DESC`,
  );

  return (
    <>
      {!isLoading && !isRefetching && !(data?.posts?.length > 0) ? (
        <></>
      ) : (
        <section className="section">
          <div className="container">
            <div className="section_heading_container">
              <div className="home_page_heading">
                Get latest insights on Agentic AI
              </div>
            </div>
            {isLoading || isRefetching ? (
              <div className="flex justify-center align-center w-full">
                <Spin />
              </div>
            ) : (
              <Row gutter={[36, 36]}>
                {data?.posts?.map((postData: any) => {
                  return (
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                      <Link
                        href={postData?.url}
                        target="_blank"
                        className="Col-blog"
                      >
                        <div className="blog_card">
                          <Image
                            src={postData?.feature_image}
                            alt={postData?.feature_image_alt ?? "blog-image"}
                            width={100}
                            height={100}
                          />
                          <div className="blog_content">
                            <div className="flex justify-end items-center mb-4">
                              {/* <div className="artical_badge">Article</div> */}
                              <div className="blog_date">
                                {Intl.DateTimeFormat("en-GB").format(
                                  new Date(postData?.created_at),
                                )}
                              </div>
                            </div>
                            <h5 className="mb-4">{postData?.title}</h5>
                            <p className="mb-4">
                              {postData?.excerpt?.substring(0, 120)}...
                            </p>
                            <button className="link_button link_button_primary flex items-center gap-2">
                              Read more{" "}
                              <span className="icon">
                                <IoMdArrowForward />
                              </span>
                            </button>
                          </div>
                        </div>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default CaseStudy;
