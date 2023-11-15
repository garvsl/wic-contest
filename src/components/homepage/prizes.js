import razer from "../../images/razerKraken.png";
import logitech from "../../images/logitech.png";
import monitor from "../../images/monitor.png";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
export default function Prizes() {
  return (
    <section id="project section">
      <div className="container-sm">
        <div className="project-inner section-inner">
          <div className="project-header text-center">
            <h2 className="section-title mt-0">Our Prizes</h2>
          </div>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          >
            <Card backgroundColor="blackAlpha.300" maxW="lg">
              {/* <Badge marginLeft={"2"} marginTop={"2"}  width={"fit-content"} colorScheme="green">
                1st
              </Badge> */}
              <CardHeader>
                <Flex justifyContent="center">
                  <Heading color="white" size="sm">
                    Samsung 21.5" Monitor
                  </Heading>
                </Flex>
              </CardHeader>
              <CardBody>
                <Image
                  src={monitor}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </CardBody>
            </Card>

            <Card backgroundColor="blackAlpha.300" maxW="lg">
              {/* <Badge marginLeft={"2"} marginTop={"2"} width={"fit-content"} colorScheme="purple">
                2nd
              </Badge> */}
              <CardHeader>
                <Flex justifyContent="center">
                  <Heading color="white" size="sm">
                    Redragon Keyboard
                  </Heading>
                </Flex>
              </CardHeader>
              <CardBody>
                <Image
                  src={logitech}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </CardBody>
            </Card>

            <Card backgroundColor="blackAlpha.300" maxW="lg">
              {/* <Badge marginLeft={"2"} marginTop={"2"}  width={"fit-content"} colorScheme="pink">
                3rd
              </Badge> */}
              <CardHeader>
                <Flex justifyContent="center">
                  <Heading color="white" size="sm">
                    Libre Computer Board
                  </Heading>
                </Flex>
              </CardHeader>
              <CardBody>
                <Image
                  src={razer}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </CardBody>
            </Card>
          </SimpleGrid>
        </div>
      </div>
    </section>
  );
}
