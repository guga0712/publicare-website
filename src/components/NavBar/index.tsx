"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg="transparent"
        color="gray.600"
        minH="60px"
        align="center"
        justify="space-between"
        px={{ base: 4, md: 0 }}
      >
        {/* Logo */}
        <Flex align="center">
          <Image src="/logo.png" alt="logo" width={120} />
        </Flex>

        {/* Menu Mobile */}
        <Flex display={{ base: "flex", md: "none" }} align="center" gap={3}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} color="white" />
              ) : (
                <HamburgerIcon w={5} h={5} color="white" />
              )
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>

        {/* Menu Desktop */}
        <Flex display={{ base: "none", md: "flex" }} align="center" gap={6}>
          <DesktopNav />
          <Button
            fontSize="md"
            h="36px"
            w="150px"
            fontWeight={600}
            color="white"
            backgroundColor="rgba(255, 255, 255, 0.3)"
            borderRadius={8}
          >
            Login
          </Button>
          <Button
            fontSize="md"
            fontWeight={600}
            h="36px"
            w="150px"
            color="var(--roxo)"
            bg="white"
            borderRadius={8}
          >
            Criar conta
          </Button>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize="sm"
                fontWeight={500}
                color="gray.600"
                _hover={{
                  textDecoration: "none",
                  color: "gray.800",
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <Portal>
                <PopoverContent
                  border={0}
                  boxShadow="xl"
                  bg="white"
                  p={4}
                  rounded="xl"
                  minW="sm"
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              </Portal>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role="group"
      display="block"
      p={2}
      rounded="md"
      _hover={{ bg: "pink.50" }}
    >
      <Stack direction="row" align="center">
        <Box>
          <Text
            transition="all .3s ease"
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition="all .3s ease"
          transform="translateX(-10px)"
          _groupHover={{ transform: "translateX(0)" }}
          justify="flex-end"
          align="center"
          flex={1}
        >
          <Icon color="pink.400" w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack bg="transparent" p={4} display={{ md: "none" }} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      {/* Botões Mobile */}
      <Stack spacing={4} pt={4}>
        <Button
          fontSize="md"
          h="36px"
          w="100%"
          fontWeight={600}
          color="white"
          backgroundColor="rgba(255, 255, 255, 0.3)"
          borderRadius={8}
        >
          Login
        </Button>
        <Button
          fontSize="md"
          h="36px"
          w="100%"
          fontWeight={600}
          color="var(--roxo)"
          bg="white"
          borderRadius={8}
        >
          Criar conta
        </Button>
      </Stack>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color="gray.600">
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? "rotate(180deg)" : undefined}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} style={{ marginTop: "0!important" }} animateOpacity>
        <Stack
          mt={2}
          pl={4}
          borderLeft="1px solid"
          borderColor="gray.200"
          align="start"
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  // {
  //   label: "Inspiration",
  //   children: [
  //     {
  //       label: "Explore Design Work",
  //       subLabel: "Trending Design to inspire you",
  //       href: "#",
  //     },
  //     {
  //       label: "New & Noteworthy",
  //       subLabel: "Up-and-coming Designers",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "Find Work",
  //   children: [
  //     {
  //       label: "Job Board",
  //       subLabel: "Find your dream design job",
  //       href: "#",
  //     },
  //     {
  //       label: "Freelance Projects",
  //       subLabel: "An exclusive list for contract work",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "Learn Design",
  //   href: "#",
  // },
  // {
  //   label: "Hire Designers",
  //   href: "#",
  // },
];
