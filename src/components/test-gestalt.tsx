/* components/test-gestalt.tsx */
import { Box, Flex, Text, Heading, Button } from 'gestalt';

export default function TestGestalt() {
  return (
    <Box padding={8} color="default">
      <Flex direction="column" gap={4} alignItems="center">
        <Heading size="400">
          🎉 Gestalt is Working!
        </Heading>
        
        <Box display="flex" justifyContent="center">
          <Text size="300" align="center">
            If you can see this styled properly, Gestalt is installed correctly.
          </Text>
        </Box>

        <Box
          color="secondary"
          padding={4}
          rounding={3}
          width="100%"
          maxWidth={400}
        >
          <Text align="center" color="default">
            This is a Gestalt Box component
          </Text>
        </Box>

        <Flex gap={4} wrap>
          <Button text="Primary Button" color="red" size="md" />
          <Button text="Secondary Button" color="gray" size="md" />
        </Flex>

        <Box color="lightWash" padding={6} rounding={2} width="100%" maxWidth={500}>
          <Text size="200" color="default">
            ✅ Box component working<br/>
            ✅ Flex layout working<br/>
            ✅ Typography working<br/>
            ✅ Colors working<br/>
            ✅ Buttons working
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}