import React, { useState } from "react";

import { Box, Flex, Heading, Text, Button, Image } from "rebass";

import { Label, Input } from "@rebass/forms";
import { addNewPotentialUser } from "../api";
import { ThreeBounce } from "styled-spinkit";

const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const Home = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [stateMachine, setStateMachine] = useState({ state: "idle" });
  const [error, setError] = useState("");
  const sendPotentialUserRequest = () => {
    if (!validateEmail(email)) {
      setError("Please, introduce a valid email");
      return;
    }

    setLoading(true);
    setStateMachine({ state: "loading" });
    addNewPotentialUser({ email: email })
      .then(r => {
        console.log(r);
        if (r.status === 200) {
          console.log(r.data.email);
          setStateMachine({ state: "complete" });
        }
      })
      .catch(err => {
        setStateMachine({ state: "failed" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Flex justifyContent={["center", "right", "right"]} mx={[2, 2, 4]} pt={2}>
        <Box>
          <img src={"/minskylogo.svg"} alt={"Minsky Logo"} />
        </Box>
      </Flex>
      <Flex mx={[4, 4, 6]} flexWrap="wrap" height="80%">
        <Box width={[1, 1 / 2, 1 / 2]} display={"flex"}>
          <Box marginTop={"auto"} width="100%" marginBottom={[5, 5, 6]}>
            <Box width={1} my={2}>
              <Box>
                <Box width={1}>
                  <Heading
                    fontFamily="Rubik"
                    css={{ textTransform: "uppercase" }}
                    fontSize={[5, 5, 5]}
                    color={"#1B1B1B"}
                  >
                    Something
                  </Heading>
                </Box>
                <Box width={1}>
                  <Heading
                    fontFamily="Rubik"
                    css={{ textTransform: "uppercase" }}
                    fontSize={[5, 5, 5]}
                    color={"#1B1B1B"}
                  >
                    <Text display={"inline"} color={"#FFDE5F"} fontWeight={600}>
                      awesome
                    </Text>{" "}
                    is coming
                  </Heading>
                </Box>
              </Box>
              <Box my={2}>
                <Text color={"#1B1B1B"}>A place where your ideas can be transform to more ideas</Text>
              </Box>
            </Box>

            <Box marginTop={5}>
              <Box>
                <Heading fontSize={2} fontWeight={400} fontFamily={"Karla"}>
                  Subscribe here
                </Heading>
                <Flex verticalAlign={"center"} marginTop={2} flexWrap="wrap">
                  <Box marginTop={2} width={[1, 1, 1 / 2]} marginRight={[0, 0, 3]}>
                    <Label htmlFor="email" fontSize={1} mb={1}>
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="jhon@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      css={{ borderRadius: "8px", backgroundColor: "#F0F0F0", border: "none", padding: "8px" }}
                    />
                  </Box>
                  <Box
                    width={[1, 1, 1 / 3]}
                    marginTop={[2, "auto", "auto"]}
                    display={["flex", "block", "block"]}
                    justifyContent="flex-end"
                  >
                    <Button
                      py={2}
                      backgroundColor={loading || !validateEmail(email) ? "#F0F0F0" : "#FFDE5F"}
                      color={"#1B1B1B"}
                      css={{ borderRadius: "8px" }}
                      onClick={sendPotentialUserRequest}
                      disabled={loading || !validateEmail(email)}
                    >
                      {loading ? "PLEASE WAIT" : "SEND"}
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box width={[1, 1 / 2, 1 / 2]} display={["none", "block"]}>
          <Image src="/ideas2.png"></Image>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
