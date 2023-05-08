import razer from "../../images/razerKraken.webp";
import logitech from "../../images/logitech.png";
import monitor from "../../images/monitor.png";
import {
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
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card backgroundColor="blackAlpha.300" maxW="sm">
              <CardHeader>
                <Flex justifyContent="center">
                  <Heading color="white" size="md">
                    Samsung Essential 27" HD LED Monitor
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

            <Card backgroundColor="blackAlpha.300" maxW="sm">
              <CardHeader>
                <Flex justifyContent="center">
                  <Heading color="white" size="md">
                    Logitech Wired Mechanical Tactile Switch Gaming Keyboard
                    With Backlit Keys
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

            <Card backgroundColor="blackAlpha.300" maxW="sm">
              <CardHeader>
                <Flex justifyContent="center">
                  <Heading color="white" size="md">
                    Razer Kraken Gaming Headset With Retractable Noise Isolating
                    Microphone
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
