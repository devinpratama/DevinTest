import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Image, Col, Row, Space, Alert, Button } from 'antd';
import flash from "./assets/Image/flash.png";
import eye from "./assets/Image/eye.png";
import chat from "./assets/Image/chat.png";
import brain from "./assets/Image/brain.png";
const App = () => (
  <Row
    style={{

      backgroundColor: "#f0f2f5",
      alignContent: "center",
      borderRadius: 50,
      textAlign: "center",
    }}>

    <Col span={12} align="left" xs={12} sm={12}
    >

      <Card className='card'

        style={{
          width: 450,
          height: 600,
          alignContent: "center",
          borderRadius: 50,
          textAlign: "center",
        }}


      >
        <p
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: "#CAC9FF",

          }}>
          Your Result
        </p>

        <Avatar size={230} shape="circle" style={{
          fontSize: 60,
          fontWeight: 'bold',
          color: "white",
          textAlign: 'center',

        }} > 76


        </Avatar>


        <p
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: "white",

          }}>
          Great
        </p>

        <p
          style={{
            fontSize: 22,
            color: "#CAC9FF",

          }}>
          Your performance exceed 65% of the people conducting the test here!
        </p>




      </Card>

    </Col>
    <Col xs={24} sm={8}
      span={12} align="right" >
      <Card

        style={{
          width: 450,
          height: 600,
          backgroundColor: "#f0f2f5",
          alignContent: "center",
          borderRadius: 50,


        }}


      >
        <p
          style={{
            fontSize: 30,
            color: "black",
            textAlign: "left",
            fontWeight: 'bold',
          }}>
          Summary
        </p>
        <Space
          direction="vertical"
          style={{
            width: '100%',
            paddingBottom: 20,

          }}
        >
          <Row className='box1'
            style={{
              textAlign: "start",
              height: 60,
              margin: 6,

              borderRadius: 10,


            }}>
            <Col span={4}>
              <Image
                style={{
                  alignContent: "flex-start",
                  textAlign: "start",
                  padding: 20
                }}

                src={flash}
              />
            </Col>
            <Col span={8}
              style={{
                fontWeight: "bold",
                fontSize: 20,

                paddingBottom: 20,
              }}>
              <p
                style={{
                  color: "#FF5555"
                }}>
                Reaction
              </p>
            </Col>
            <Col span={10}
              style={{
                fontWeight: "bold",
                fontSize: 20,

                paddingBottom: 20,
              }}>
              <p style={{
                paddingLeft: 80
              }}>
                80 / 100
              </p>
            </Col>
          </Row>

          <Row className='box2'
            style={{
              textAlign: "start",
              height: 60,
              margin: 6,
              borderRadius: 10,

            }}>
            <Col span={4}>
              <Image
                style={{
                  alignContent: "flex-start",
                  textAlign: "start",
                  padding: 20
                }}
                src={brain}
              />
            </Col>
            <Col span={8}
              style={{
                fontWeight: "bold",
                fontSize: 20,

                paddingBottom: 20,
              }}>
              <p style={{
                color: "#FFB21E"
              }}>

                Memory
              </p>
            </Col>
            <Col span={10}
              style={{
                fontWeight: "bold",
                fontSize: 20,

                paddingBottom: 20,
              }}>
              <p style={{
                paddingLeft: 80
              }}>
                92 / 100
              </p>
            </Col>
          </Row>

          <Row className='box3'
            style={{
              textAlign: "start",
              height: 60,
              margin: 6,
              borderRadius: 10,

            }}>
            <Col span={4}>
              <Image
                style={{
                  alignContent: "flex-start",
                  textAlign: "start",
                  alignItems: "center",
                  padding: 20
                }}
                src={chat}
              />
            </Col>
            <Col span={8}
              style={{
                fontWeight: "bold",
                fontSize: 20,

                paddingBottom: 20,
              }}>
              <p style={{
                color: "#00BB8F"
              }}>

                Verbal
              </p>
            </Col>
            <Col span={10}
              style={{
                fontWeight: "bold",
                fontSize: 20,

                paddingBottom: 20,
              }}>
              <p style={{
                paddingLeft: 80
              }}>
                61 / 100
              </p>
            </Col>
          </Row>

          <Row className='box4'
            style={{
              textAlign: "start",
              height: 60,
              margin: 6,

              borderRadius: 10,

            }}>
            <Col span={4}>
              <Image
                style={{
                  alignContent: "flex-start",
                  textAlign: "start",
                  padding: 20
                }}
                src={eye}
              />
            </Col>
            <Col span={8}
              style={{
                fontWeight: "bold",
                fontSize: 20,

                paddingBottom: 20,
              }}>
              <p style={{
                color: "#1125D6"
              }}>
                Visual
              </p>
            </Col>
            <Col span={10}
              style={{
                fontWeight: "bold",
                fontSize: 20,

                paddingBottom: 20,
              }}>
              <p style={{
                paddingLeft: 80
              }}>
                73 / 100
              </p>
            </Col>
          </Row>


        </Space>

        <Button className="custom-button"
          style={{
            borderRadius: 60,
            width: 380,
            height: 70,
            fontSize: 20,


          }}>Continue</Button>
      </Card>

    </Col>

  </Row >



);
export default App;
