import {
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import TimeAgo from "timeago-react";

const RetailInfo_TV_TMDB = ({ data, borderColor }) => {
  const { colorMode } = useColorMode();
  const fallbackSrc = {
    dark: "/movie-placeholder-dark.png",
    light: "/movie-placeholder-light.png",
  };

  console.log;
  if (!data) return null;

  return (
    <Flex
      justify="space-between"
      align="start"
      borderWidth="1px"
      borderRadius="md"
      borderColor={borderColor}
      mb={2}
    >
      <Grid p={4} gap="0 20px" templateColumns="150px auto">
        <Heading size="md" justifySelf="end" mb={2} color="gray.500">
          Retail info
        </Heading>
        <span></span>

        <Heading size="sm" justifySelf="end">
          Series name
        </Heading>
        <Text wordBreak="break-all">{data.original_name}</Text>

        <Heading size="sm" justifySelf="end">
          Country
        </Heading>
        <Text>
          {data.origin_country.length > 0
            ? data.origin_country.join(", ")
            : "-"}
        </Text>

        <Heading size="sm" justifySelf="end">
          Network
        </Heading>
        <Text>
          {data.networks.length > 0
            ? data.networks.map((n) => n.name).join(", ")
            : "-"}
        </Text>

        <Heading size="sm" justifySelf="end">
          First aired
        </Heading>
        <Text>
          {data.first_air_date} (
          <TimeAgo datetime={data.first_air_date} />)
        </Text>

        <Heading size="sm" justifySelf="end">
          Runtime
        </Heading>
        <Text>
          {data.episode_run_time.length > 0
            ? data.episode_run_time.map((t) => t + " min").join(", ")
            : "-"}
        </Text>

        <Heading size="sm" justifySelf="end">
          Genre
        </Heading>
        <Text>
          {data.genres.length > 0
            ? data.genres.map((g) => g.name).join(", ")
            : "-"}
        </Text>

        <Heading size="sm" justifySelf="end">
          Homepage
        </Heading>
        <Text>
          <a href={data.homepage} target="_blank">
            {data.homepage || "-"}
          </a>
        </Text>

        <Heading size="sm" justifySelf="end">
          Rating
        </Heading>
        <Text>
          {data.vote_count === 0
            ? "-"
            : `${data.vote_average} / 10 (${data.vote_count} votes, TMDB)`}
        </Text>

        <Heading size="sm" justifySelf="end">
          Status
        </Heading>
        <Text>{data.status || "-"}</Text>

        <Heading size="sm" justifySelf="end">
          Overview
        </Heading>
        <Text>{data.overview || "-"}</Text>
      </Grid>

      <Image
        src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
        fallbackSrc={fallbackSrc[colorMode]}
        alt="poster"
        m={4}
        objectFit="contain"
        htmlHeight="100%"
        htmlWidth="150px"
        minW="150px"
        borderWidth="1px"
        border={borderColor}
      />
    </Flex>
  );
};

export default RetailInfo_TV_TMDB;
