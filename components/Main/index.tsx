import { boardList } from "@/constants/stampBoard";
import pzzTheme from "@/public/theme/theme";
import { BellIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import IssueButton from "../issueButton";

export default function Main() {
  return (
    <>
      <Flex
        justify="flex-end"
        w="100%"
        p="20px"
        fontSize="20px"
        boxSizing="border-box"
      >
        <Box>
          <BellIcon />
        </Box>
      </Flex>

      <Flex w="100%" flexDir="column" justify="flex-start">
        <Tabs w="100%" isFitted variant="unstyled">
          <TabList borderBottom="1px solid #ccc">
            <Tab
              _selected={{ fontWeight: "600", color: "pzz.main" }}
              color="#ccc"
            >
              달님
            </Tab>
            <Tab
              _selected={{ fontWeight: "600", color: "pzz.main" }}
              color="#ccc"
            >
              은비
            </Tab>
          </TabList>
          <TabIndicator
            mt="-2.5px"
            height="3px"
            bg="pzz.main"
            borderRadius="1px"
          />

          <TabPanels pt="10px">
            <TabPanel cursor="pointer">
              {boardList.map(({ title, present, totalStamp, progress }) => {
                return (
                  <Card key="title" variant="outline" mb="20px" p="30px 25px">
                    <CardHeader m="0" p="0">
                      <Heading size="md">{title}</Heading>
                    </CardHeader>
                    <CardBody m="0" p="0" mt="10px">
                      <Box display="flex" alignItems="center">
                        <Badge bg="PRESENT.500" color="PRESENT.50" mr="10px">
                          선물
                        </Badge>
                        <Text display="inline" color="#7c7c7c">
                          {present}
                        </Text>
                      </Box>
                      <Box textAlign="right" mt="30px">
                        <Text>{totalStamp}개 중 </Text>
                        <Text
                          display="inline"
                          color="pzz.main"
                          fontWeight="700"
                        >
                          {progress}
                        </Text>
                        개 달성
                      </Box>
                    </CardBody>
                  </Card>
                );
              })}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <IssueButton type="parent" />
      <IssueButton type="child" />
    </>
  );
}
