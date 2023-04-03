import { BellIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import IssueButton from "../issueButton";

export default function CakeMain() {
  return (
    <>
      <BellIcon />
      <Flex w="100%" flexDir="column">
        <Tabs
          w="100%"
          isFitted
          mt="50px"
          variant="unstyled"
          borderBottom="1px solid #ccc"
        >
          <TabList>
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
            mt="-1.5px"
            height="3px"
            bg="pzz.main"
            borderRadius="1px"
          />
        </Tabs>

        <IssueButton type="parent" />
        <IssueButton type="child" />
      </Flex>
    </>
  );
}
