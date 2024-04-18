import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button, Img } from "../../components";

const data = [
  {
    newtuning: "New Tuning Software Released",
    ourlatest: "Our latest software update brings new features and enhancements to our tuning services.",
  },
  {
    newtuning: "Tips for Better Fuel Efficiency",
    ourlatest: "Discover how our services can help you save on fuel and reduce emissions.",
  },
  {
    newtuning: "Upcoming Industry Events",
    ourlatest: "Join us at the leading automotive events to learn more about the future of tuning.",
  },
];
const data1 = [
  {
    sinceusing: "&quot;Since using your tuning services, my car has never performed better. Highly recommended!&quot;",
    sarahl: "- Sarah L.",
  },
  {
    sinceusing:
      "&quot;The custom file service was a game-changer for my track days. Thank you for the expert support!&quot;",
    sarahl: "- Mike D.",
  },
];

export default function FramePage() {
  return (
    <>
      <Helmet>
        <title>Enhance Your Vehicle with Our Tuning Services - Get Started Today</title>
        <meta
          name="description"
          content="Explore our chip tuning and file services to boost your vehicle's performance. Custom files, professional diagnostics, and the latest updates in tuning technology."
        />
      </Helmet>

      {/* main content section */}
      <div className="w-full bg-gray-100">
        {/* welcome section */}
        <div className="flex flex-col gap-9">
          {/* introduction text section */}
          <div className="flex flex-col items-start gap-[21px] py-[31px] sm:py-5">
            <div className="container-xs flex pl-[75px] pr-14 md:p-5 md:px-5">
              <Heading size="2xl" as="h1" className="text-center">
                Welcome to Our Service Platform
              </Heading>
            </div>
            <div className="mb-2 flex">
              <Text size="md" as="p" className="text-center">
                We offer top-notch chip tuning and file services to enhance your vehicle&#39;s performance.
              </Text>
            </div>
          </div>
          <div className="container-xs md:p-5">
            {/* services overview section */}
            <div className="flex flex-col items-start gap-[27px]">
              <Heading size="xl" as="h2" className="ml-[442px] text-center md:ml-0">
                Our Services
              </Heading>

              {/* services list section */}
              <div className="flex gap-6 self-stretch md:flex-col">
                <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-white-A700 p-6 shadow-xs sm:p-5">
                  <Img src="images/img_minimize.svg" alt="chip_tuning_one" className="h-[36px] w-[36px]" />
                  <div className="mb-14 flex self-start">
                    <Heading as="h3" className="ml-[85px] self-end text-center md:ml-0">
                      Chip Tuning
                    </Heading>
                  </div>
                </div>
                <div className="flex w-full flex-col items-end gap-3 rounded-lg bg-white-A700 py-6 pr-6 shadow-xs sm:py-5 sm:pr-5">
                  <Img src="images/img_frame.svg" alt="image" className="mr-[154px] h-[36px] w-[36px] md:mr-0" />
                  <div className="flex self-start">
                    <Heading as="h4" className="ml-20 self-start text-center md:ml-0">
                      File Services
                    </Heading>
                  </div>
                  <div className="flex w-[32%] self-start md:w-full">
                    <Text as="p" className="w-[81%] text-center leading-6">
                      Get custom-tailored files for your vehicle&#39;s specific needs and conditions.
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-end justify-center gap-3 rounded-lg bg-white-A700 py-[23px] pr-[23px] shadow-xs sm:py-5 sm:pr-5">
                  <Img src="images/img_vector.svg" alt="vector_one" className="mr-[156px] h-[36px] w-[36px] md:mr-0" />
                  <div className="flex self-start">
                    <Heading as="h5" className="ml-[87px] self-end text-center md:ml-0">
                      Diagnostics
                    </Heading>
                  </div>
                  <div className="flex w-full items-center justify-between gap-5 self-start pr-[243px] md:pr-5 sm:flex-col">
                    <Text as="p" className="w-[38%] text-center leading-6 sm:w-full">
                      Enhance your vehicle&#39;s performance with our advanced chip tuning solutions.
                    </Text>
                    <Text as="p" className="w-[5%] text-center leading-6 sm:w-full">
                      Professional diagnostics and troubleshooting to keep your vehicle at peak performance.
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* updates section */}
            <div className="mt-10 flex flex-col items-start justify-center gap-[25px] bg-white-A700 py-[38px] sm:py-5">
              <Heading size="xl" as="h6" className="ml-[402px] text-center md:ml-0">
                Recent Updates
              </Heading>

              {/* updates list section */}
              <div className="flex gap-[72px] self-stretch p-6 md:flex-col sm:p-5">
                {data.map((d, index) => (
                  <div key={"listvectorone" + index} className="flex w-full flex-col items-start gap-3">
                    <div className="flex w-[87%] justify-center bg-gray-300 px-14 py-[60px] md:w-full md:p-5">
                      <Img src="images/img_vector_gray_500.svg" alt="vector_one" className="my-6 h-[29px] w-[95%]" />
                    </div>
                    <div className="flex">
                      <Heading as="h6" className="self-end">
                        {d.newtuning}
                      </Heading>
                    </div>
                    <div className="flex self-stretch">
                      <Text as="p" className="w-[93%] leading-6">
                        {d.ourlatest}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* quick links section */}
            <div className="flex flex-col items-start justify-center gap-[26px] py-[37px] sm:py-5">
              <Heading size="xl" as="h3" className="ml-[457px] text-center md:ml-0">
                Quick Links
              </Heading>
              <div className="flex justify-center gap-6 self-stretch px-[295px] md:flex-col md:px-5">
                <Button className="w-full flex-1 rounded-lg shadow-xs md:self-stretch">Credits Purchase</Button>
                <Button className="min-w-[115px] rounded-lg shadow-xs">File Upload</Button>
                <Button className="w-full flex-1 rounded-lg shadow-xs md:self-stretch">Services Pricelist</Button>
                <Button className="min-w-[140px] rounded-lg shadow-xs">Support Ticket</Button>
              </div>
            </div>

            {/* testimonials section */}
            <div className="flex flex-col items-start justify-center gap-7 bg-gray-200 py-[35px] sm:py-5">
              <Heading size="xl" as="h3" className="ml-[440px] text-center md:ml-0">
                Testimonials
              </Heading>

              {/* testimonials list section */}
              <div className="flex flex-col gap-6 self-stretch px-[225px] md:px-5">
                {data1.map((d, index) => (
                  <div
                    key={"listsinceusing" + index}
                    className="flex w-[95%] flex-col items-center gap-4 rounded-lg bg-white-A700 p-6 shadow-xs md:w-full sm:p-5"
                  >
                    <div className="flex self-start">
                      <Text as="p">{d.sinceusing}</Text>
                    </div>
                    <div className="flex self-start">
                      <Text as="p">{d.sarahl}</Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* contact section */}
            <div className="flex flex-col items-start justify-center gap-7 py-[35px] sm:py-5">
              <Heading size="xl" as="h3" className="ml-[447px] text-center md:ml-0">
                Get in Touch
              </Heading>
              <div className="flex flex-col self-stretch">
                <div className="flex self-start">
                  <Text as="p" className="ml-[219px] text-center md:ml-0">
                    For customer support or inquiries, please contact us:
                  </Text>
                </div>
                <div className="mt-4 flex self-start">
                  <Heading as="h6" className="ml-[398px] self-end text-center md:ml-0">
                    Email: support@example.com
                  </Heading>
                </div>
                <div className="flex self-start">
                  <Heading as="h6" className="ml-[451px] self-start text-center md:ml-0">
                    Phone: +123 456 7890
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
