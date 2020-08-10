import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Image, Button } from "@chakra-ui/core";

export default function NavComponent() {
  return (
      <Menu>
        <MenuButton as={Button} rightIcon="chevron-down">
          Your Cats
        </MenuButton>
        <MenuList>
          <MenuItem minH="48px">
            <Image
              size="2rem"
              rounded="full"
              src="https://placekitten.com/100/100"
              alt="Fluffybuns the destroyer"
              mr="12px"
            />
            <span>Fluffybuns the Destroyer</span>
          </MenuItem>
          <MenuItem minH="40px">
            <Image
              size="2rem"
              rounded="full"
              src="https://placekitten.com/120/120"
              alt="Simon the pensive"
              mr="12px"
            />
            <span>Simon the pensive</span>
          </MenuItem>
        </MenuList>
      </Menu>
  );
}
