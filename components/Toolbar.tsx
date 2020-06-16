import { Flex, FormLabel, Heading, Switch } from "@chakra-ui/core";
import React from "react";
import ModalSubscribe from "./ModalSubscribe";

const Toolbar = ({ took, resultsCnt }) => {
  // const { error, data } = useContext(StateContext);
  // console.log("ctx", data);

  return (
    <>
      <Flex justify="space-between" align="center" mt={5}>
        <Flex>
          <Flex align="center">
            <ModalSubscribe />

            <FormLabel pb={0} ml={4} htmlFor="live">
              Live updates
            </FormLabel>
            <Switch
              size="sm"
              pt="2px"
              id="live"
              defaultIsChecked={true}
              color="teal"
            />
          </Flex>
        </Flex>

        {took && (
          <Heading size="xs" color="teal.400">
            {resultsCnt} results found in {took} ms
          </Heading>
        )}
      </Flex>
    </>
  );
};

export default Toolbar;
