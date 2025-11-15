import React from 'react';
import './styles/global.css';
import {
  Container,
  Stack,
  Grid,
  GridItem,
  Flex,
  Button,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Badge,
  Avatar,
  AvatarGroup,
  Spinner,
  Checkbox,
  Divider,
  Typography,
  FormField,
  FormLabel,
  FormError,
  FormGroup,
} from './components/ui';
import { Search, Calendar, Users, MapPin } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-secondary)' }}>
      {/* Navigation */}
      <nav
        style={{
          height: 'var(--nav-height)',
          backgroundColor: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-sm)',
          padding: '0 var(--nav-padding-x)',
        }}
      >
        <Flex align="center" justify="between" style={{ height: '100%' }}>
          <Typography variant="h5" color="primary" weight="bold">
            GLIMMORA HOTEL
          </Typography>
          <Flex gap={4}>
            <Button variant="ghost">Rooms</Button>
            <Button variant="ghost">Amenities</Button>
            <Button variant="ghost">Contact</Button>
            <Button variant="primary">Book Now</Button>
          </Flex>
        </Flex>
      </nav>

      {/* Main Content */}
      <Container maxWidth="xl">
        <Stack spacing={8} style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
          {/* Hero Section */}
          <Stack spacing={4}>
            <Typography variant="h1" align="center" gutterBottom>
              Welcome to Glimmora Hotel
            </Typography>
            <Typography variant="body" align="center" color="secondary">
              Experience luxury and comfort in the heart of the city
            </Typography>
          </Stack>

          {/* Design System Showcase */}
          <Card>
            <CardHeader>
              <Typography variant="h3">Design System Components</Typography>
              <Typography variant="caption" color="secondary">
                A comprehensive collection of UI components for Glimmora Hotel
              </Typography>
            </CardHeader>
            <CardBody>
              <Stack spacing={6}>
                {/* Buttons */}
                <Stack spacing={3}>
                  <Typography variant="h5">Buttons</Typography>
                  <Flex gap={3} wrap="wrap">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                    <Button variant="primary" isLoading={isLoading} onClick={() => setIsLoading(!isLoading)}>
                      {isLoading ? 'Loading' : 'Toggle Loading'}
                    </Button>
                    <Button variant="primary" disabled>
                      Disabled
                    </Button>
                  </Flex>
                </Stack>

                <Divider />

                {/* Inputs */}
                <Stack spacing={3}>
                  <Typography variant="h5">Inputs</Typography>
                  <Grid cols={2} gap={4} responsive>
                    <GridItem>
                      <Input
                        label="Full Name"
                        placeholder="Enter your name"
                        required
                      />
                    </GridItem>
                    <GridItem>
                      <Input
                        label="Email"
                        type="email"
                        placeholder="your@email.com"
                        leftIcon={<Search size={20} />}
                      />
                    </GridItem>
                    <GridItem>
                      <Input
                        label="Check-in Date"
                        type="date"
                        leftIcon={<Calendar size={20} />}
                      />
                    </GridItem>
                    <GridItem>
                      <Input
                        label="Error Example"
                        error="This field is required"
                        defaultValue="Invalid input"
                      />
                    </GridItem>
                  </Grid>
                </Stack>

                <Divider />

                {/* Cards */}
                <Stack spacing={3}>
                  <Typography variant="h5">Cards</Typography>
                  <Grid cols={3} gap={4} responsive>
                    <Card variant="elevated" hoverable>
                      <CardBody>
                        <Stack spacing={2}>
                          <Typography variant="h6">Deluxe Room</Typography>
                          <Typography variant="caption" color="secondary">
                            Spacious room with city view
                          </Typography>
                          <Flex align="center" gap={2}>
                            <Badge variant="primary">Available</Badge>
                            <Typography variant="body" weight="bold">
                              $299/night
                            </Typography>
                          </Flex>
                        </Stack>
                      </CardBody>
                    </Card>

                    <Card variant="outlined" hoverable>
                      <CardBody>
                        <Stack spacing={2}>
                          <Typography variant="h6">Suite</Typography>
                          <Typography variant="caption" color="secondary">
                            Luxury suite with ocean view
                          </Typography>
                          <Flex align="center" gap={2}>
                            <Badge variant="warning">Limited</Badge>
                            <Typography variant="body" weight="bold">
                              $599/night
                            </Typography>
                          </Flex>
                        </Stack>
                      </CardBody>
                    </Card>

                    <Card variant="filled" hoverable>
                      <CardBody>
                        <Stack spacing={2}>
                          <Typography variant="h6">Penthouse</Typography>
                          <Typography variant="caption" color="secondary">
                            Ultimate luxury experience
                          </Typography>
                          <Flex align="center" gap={2}>
                            <Badge variant="error">Sold Out</Badge>
                            <Typography variant="body" weight="bold">
                              $999/night
                            </Typography>
                          </Flex>
                        </Stack>
                      </CardBody>
                    </Card>
                  </Grid>
                </Stack>

                <Divider />

                {/* Badges */}
                <Stack spacing={3}>
                  <Typography variant="h5">Badges</Typography>
                  <Flex gap={3} wrap="wrap" align="center">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="error">Error</Badge>
                    <Badge variant="info">Info</Badge>
                    <Badge variant="neutral">Neutral</Badge>
                    <Badge variant="primary" size="small">Small</Badge>
                    <Badge variant="primary" size="large">Large</Badge>
                    <Badge variant="success" dot />
                  </Flex>
                </Stack>

                <Divider />

                {/* Avatars */}
                <Stack spacing={3}>
                  <Typography variant="h5">Avatars</Typography>
                  <Flex gap={6} align="center">
                    <Stack spacing={2} align="center">
                      <Avatar size="small" fallback="JD" />
                      <Typography variant="caption">Small</Typography>
                    </Stack>
                    <Stack spacing={2} align="center">
                      <Avatar size="medium" fallback="John Doe" />
                      <Typography variant="caption">Medium</Typography>
                    </Stack>
                    <Stack spacing={2} align="center">
                      <Avatar size="large" fallback="JD" shape="square" />
                      <Typography variant="caption">Large Square</Typography>
                    </Stack>
                    <Stack spacing={2} align="center">
                      <AvatarGroup max={3} size="medium">
                        <Avatar fallback="John Doe" />
                        <Avatar fallback="Jane Smith" />
                        <Avatar fallback="Bob Johnson" />
                        <Avatar fallback="Alice Williams" />
                        <Avatar fallback="Charlie Brown" />
                      </AvatarGroup>
                      <Typography variant="caption">Group</Typography>
                    </Stack>
                  </Flex>
                </Stack>

                <Divider />

                {/* Spinners */}
                <Stack spacing={3}>
                  <Typography variant="h5">Loading Spinners</Typography>
                  <Flex gap={6} align="center">
                    <Spinner size="small" />
                    <Spinner size="medium" />
                    <Spinner size="large" />
                  </Flex>
                </Stack>

                <Divider />

                {/* Checkboxes */}
                <Stack spacing={3}>
                  <Typography variant="h5">Checkboxes</Typography>
                  <FormGroup spacing="small">
                    <Checkbox
                      label="I agree to the terms and conditions"
                      checked={checkboxChecked}
                      onChange={(e) => setCheckboxChecked(e.target.checked)}
                    />
                    <Checkbox label="Send me promotional emails" />
                    <Checkbox label="Disabled checkbox" disabled />
                    <Checkbox label="Checkbox with error" error="This field is required" />
                  </FormGroup>
                </Stack>

                <Divider />

                {/* Typography */}
                <Stack spacing={3}>
                  <Typography variant="h5">Typography</Typography>
                  <Stack spacing={2}>
                    <Typography variant="h1">Heading 1</Typography>
                    <Typography variant="h2">Heading 2</Typography>
                    <Typography variant="h3">Heading 3</Typography>
                    <Typography variant="h4">Heading 4</Typography>
                    <Typography variant="h5">Heading 5</Typography>
                    <Typography variant="h6">Heading 6</Typography>
                    <Typography variant="body">Body text - The quick brown fox jumps over the lazy dog</Typography>
                    <Typography variant="caption" color="secondary">Caption text - Additional information</Typography>
                    <Typography variant="overline">Overline Text</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </CardBody>
            <CardFooter>
              <Typography variant="caption" color="secondary">
                Glimmora Hotel Design System v1.0.0
              </Typography>
            </CardFooter>
          </Card>

          {/* Booking Form Example */}
          <Card>
            <CardHeader>
              <Typography variant="h4">Book Your Stay</Typography>
              <Typography variant="caption" color="secondary">
                Fill out the form below to reserve your room
              </Typography>
            </CardHeader>
            <CardBody>
              <FormGroup>
                <FormField fullWidth>
                  <FormLabel required>Full Name</FormLabel>
                  <Input placeholder="Enter your full name" />
                </FormField>

                <FormField fullWidth>
                  <FormLabel required>Email Address</FormLabel>
                  <Input type="email" placeholder="your@email.com" />
                </FormField>

                <Grid cols={2} gap={4} responsive>
                  <FormField fullWidth>
                    <FormLabel required>Check-in Date</FormLabel>
                    <Input type="date" leftIcon={<Calendar size={20} />} />
                  </FormField>

                  <FormField fullWidth>
                    <FormLabel required>Check-out Date</FormLabel>
                    <Input type="date" leftIcon={<Calendar size={20} />} />
                  </FormField>
                </Grid>

                <Grid cols={2} gap={4} responsive>
                  <FormField fullWidth>
                    <FormLabel>Number of Guests</FormLabel>
                    <Input type="number" min="1" placeholder="2" leftIcon={<Users size={20} />} />
                  </FormField>

                  <FormField fullWidth>
                    <FormLabel>Room Type</FormLabel>
                    <Input placeholder="Select room type" />
                  </FormField>
                </Grid>

                <Checkbox label="I agree to the booking terms and conditions" />
              </FormGroup>
            </CardBody>
            <CardFooter>
              <Flex gap={3}>
                <Button variant="secondary" fullWidth>Cancel</Button>
                <Button variant="primary" fullWidth>Complete Booking</Button>
              </Flex>
            </CardFooter>
          </Card>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
