import { Button, Card, CardBody, Image, Text } from "@chakra-ui/react";

const RestaurantCard = () => (
  <Card className="w-[300px] rounded-sm">
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='sm'
      />
      <Text className="text-lg mt-5 font-bold">Restaurant name</Text>
      <Text>Score: 3.5 (201 rviews)</Text>
      <Text>Paris, France</Text>
    </CardBody>
  </Card>
);

export default RestaurantCard;