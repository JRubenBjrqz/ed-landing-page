<script setup lang="ts">
import { ref } from 'vue'
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from 'reka-ui'
import { ChevronUp, ChevronDown } from 'lucide-vue-next'
// import { Button } from '@/components/ui/button.vue'

const activeTab = ref('branding-identity')

const servicesData = [
  {
    id: "branding-identity",
    name: "Branding And Identity",
    heading: "We help your business look unique and strong.",
    description:
      "Your brand is how people see you. We help bring your business personality and story to life. We create everything from your logo to a full brand system, making sure it perfectly shows who you are.",
    subServices: ["Logo Design / Brand Strategy", "Visual Identity / Brand Guidelines", "Content Marketing"],
    // abstractShape: "/placeholder.svg?height=200&width=200",
    projects: [
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=400",
        className: "col-span-2 row-span-1",
      },
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    heading: "Get seen. Get clicks. Get results.",
    description:
      "It's a big, busy internet out there—let's make sure your brand doesn't get lost in the scroll. We're all about mixing data, creativity, and a bit of digital magic to make your message pop in the right places.",
    subServices: [
      "Social Media Marketing",
      "SEO and SEM",
      "Email Campaigns",
      "Paid Ads",
      "Influencer Marketing",
      "Social Media Ads",
      "Blog Strategy",
    ],
    // abstractShape: "/placeholder.svg?height=200&width=200",
    projects: [
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=400", // Bright credit score
        className: "col-span-2 row-span-1",
      },
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=200", // Rings social media ad
        className: "col-span-1 row-span-1",
      },
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=200", // Fries social media ad
        className: "col-span-1 row-span-1",
      },
    ],
  },
  {
    id: "web-design",
    name: "Web Design",
    heading: "Great-looking websites that really work",
    description:
      "Your website is your online home. We design and build websites that are both beautiful and smart, including powerful online stores. We use clear code to make websites easy and fun to use. This makes visitors happy and keeps them coming back.",
    subServices: [
      "UX UI DESIGN",
      "Custom Web Development",
      "E-commerce and Online Stores",
      "Responsive Design",
      "Landing Page Design",
      "Website Maintenance",
    ],
    // abstractShape: "/placeholder.svg?height=200&width=200",
    projects: [
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=400", // Gerry's website
        className: "col-span-2 row-span-1",
      },
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=400", // Evento website
        className: "col-span-2 row-span-1",
      },
    ],
  },
  {
    id: "app-development",
    name: "App Development",
    heading: "We build great mobile apps.",
    description:
      "Need an app for phones or tablets? We create apps that work smoothly and look fantastic. From simple ideas to complex tools, we make sure your app is easy to use and helps your business grow.",
    subServices: [
      "iOS Apps / Android App",
      "Cross-Platform App Development",
      "Mobile UI Design",
      "App Maintenance and Support",
    ],
    // abstractShape: "/placeholder.svg?height=200&width=200",
    projects: [
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=200", // Today's activity app
        className: "col-span-1 row-span-1",
      },
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=200", // Bubble app
        className: "col-span-1 row-span-1",
      },
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=200", // Past simple app
        className: "col-span-1 row-span-1",
      },
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=400", // Manage your finances app
        className: "col-span-2 row-span-1",
      },
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=200", // Hello, Solomia app
        className: "col-span-1 row-span-1",
      },
    ],
  },
  {
    id: "hosting-maintenance",
    name: "Hosting Maintenance",
    heading: "Keeping your digital presence smooth and secure.",
    description:
      "Don't stress about your website or app's technical needs. We provide fast and secure hosting services. Our team also takes care of all updates, security checks, and fixes. This means your digital tools are always online and safe, giving you peace of mind.",
    subServices: [
      "Secure Hosting",
      "Website Updates",
      "Security Monitoring",
      "Performance Optimization",
      "Technical Support",
    ],
    // abstractShape: "/placeholder.svg?height=200&width=200",
    projects: [
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=400", // Laptop with city
        className: "col-span-2 row-span-1",
      },
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=400", // Tablet with abstract UI
        className: "col-span-2 row-span-1",
      },
    ],
  },
  {
    id: "custom-development",
    name: "Custom Development",
    heading: "Software built just for you.",
    description:
      "Do you need special software that fits your business exactly? We create unique digital tools when ready-made solutions don't work. From simple programs to complex systems, we build software to solve your specific problems and help you work better.",
    subServices: [
      "Custom Software Solutions",
      "Enterprise Software",
      "Database Development",
      "System Integrations",
      "API Development",
    ],
    // abstractShape: "/placeholder.svg?height=200&width=200",
    projects: [
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=400", // Laptop with city
        className: "col-span-2 row-span-1",
      },
      {
        type: "image",
        // src: "/placeholder.svg?height=300&width=400", // Tablet with abstract UI
        className: "col-span-2 row-span-1",
      },
    ],
  },
]
</script>

<template>
  <section class="relative py-20 md:py-32 bg-easydevs-bg">
    <div class="container mx-auto px-4 lg:px-16">
      <!-- Top Headings and Services Badge -->
      <div class="flex items-center justify-between mb-12">
        <div>
          <p class="text-lg font-medium text-easydevs-light-text">We Are Good At It</p>
          <h2 class="text-4xl font-extrabold md:text-5xl text-easydevs-dark-text">What We Offer</h2>
        </div>
        <div class="relative">
          <!-- <img src="/placeholder.svg?height=60&width=120" alt="Services outline" width="120" height="60" /> -->
        </div>
      </div>

      <!-- Tabbed Navigation and Content Area -->
      <TabsRoot v-model="activeTab" orientation="horizontal" class="w-full">
        <div class="overflow-x-auto pb-4">
          <TabsList class="flex justify-start border-b border-gray-200 bg-transparent p-0">
            <TabsTrigger
              v-for="service in servicesData"
              :key="service.id"
              :value="service.id"
              class="relative px-4 py-3 text-lg font-semibold text-easydevs-light-text data-[state=active]:text-easydevs-orange data-[state=active]:shadow-none data-[state=active]:bg-transparent hover:text-easydevs-orange transition-colors duration-200"
            >
              {{ service.name }}
              <span
                v-if="activeTab === service.id"
                class="absolute bottom-0 left-0 w-full h-0.5 bg-easydevs-orange"
              />
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          v-for="service in servicesData"
          :key="service.id"
          :value="service.id"
          class="mt-8"
        >
          <!-- Three-column content layout -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <!-- Left Column (Heading) -->
            <div class="md:col-span-1">
              <h3 class="text-3xl font-bold leading-tight text-easydevs-dark-text">{{ service.heading }}</h3>
            </div>
            <!-- Middle Column (Description & Abstract Shape) -->
            <div class="md:col-span-1 relative flex flex-col items-center justify-center text-center md:text-left">
              <p class="text-lg text-easydevs-light-text">{{ service.description }}</p>
              <!-- <img
                :src="service.abstractShape || '/placeholder.svg'"
                :alt="`Abstract design element for ${service.name}`"
                width="200"
                height="200"
                class="opacity-70 mt-8 md:mt-0"
              /> -->
            </div>
            <!-- Right Column (List of Services/Concepts) -->
            <div class="md:col-span-1 flex justify-center md:justify-end">
              <ul class="space-y-2 text-right text-lg font-medium text-easydevs-orange">
                <li v-for="(sub, idx) in service.subServices" :key="idx">{{ sub }}</li>
              </ul>
            </div>
          </div>

          <!-- Project Showcase Grid -->
          <div
            v-if="service.projects && service.projects.length > 0"
            class="relative mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <template v-for="(project, idx) in service.projects" :key="idx">
              <!-- <img
                v-if="project.type === 'image'"
                :src="project.src || '/placeholder.svg'"
                alt="Project example"
                width="400"
                height="300"
                class="aspect-video w-full object-cover rounded-lg"
                :class="project.className"
              /> -->
              <!-- Puedes agregar aquí lógica para otros tipos de proyectos -->
            </template>
            <!-- Navigation Arrows -->
            <div class="absolute right-0 top-1/2 flex -translate-y-1/2 flex-col space-y-4">
              <Button variant="outline" size="icon" class="h-10 w-10 rounded-full bg-transparent">
                <ChevronUp class="h-5 w-5" />
                <span class="sr-only">Scroll up</span>
              </Button>
              <Button variant="outline" size="icon" class="h-10 w-10 rounded-full bg-transparent">
                <ChevronDown class="h-5 w-5" />
                <span class="sr-only">Scroll down</span>
              </Button>
            </div>
          </div>
        </TabsContent>
      </TabsRoot>
    </div>
  </section>
</template>
