/* eslint-disable react/prop-types */
import { Box, Container } from "@chakra-ui/react";

const FullContainer = (props) => {
  return (
    <Box width={"full"} bg={props.bg} p={props.pad} borderBottom={props.borderBottom} margin={props.mg}>
      <Container maxW={["100%", "100%", "75%"]}>{props.children}</Container>
    </Box>
  );
};

export default FullContainer;
