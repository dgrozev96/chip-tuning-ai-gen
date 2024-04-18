import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img } from "../../components";

export default function FrameOnePage() {
  return (
    <>
      <Helmet>
        <title>Easy File Upload for Tuning Services - Supported Formats .bin, .hex, .txt</title>
        <meta
          name="description"
          content="Upload your tuning files quickly and securely. Ensure your files meet our requirements with accepted formats .bin, .hex, .txt, and a max size of 5MB."
        />
      </Helmet>

      {/* file upload section */}
      <div className="w-full bg-gray-100">
        <div className="flex flex-col gap-6 p-4">
          {/* upload instructions section */}
          <div className="container-sm mt-6 rounded-lg bg-white-A700 p-[22px] shadow-xs md:p-5">
            <div className="flex flex-col items-start gap-[25px]">
              <Heading size="xl" as="h1" className="ml-[450px] text-center md:ml-0">
                File Upload
              </Heading>
              <div className="flex flex-col items-center gap-[68px] self-stretch sm:gap-[34px]">
                <div className="relative h-[28px] self-stretch md:h-auto">
                  <Text size="md" as="p" className="ml-[412px] text-center md:ml-0">
                    Choose a file to upload
                  </Text>
                  <Img
                    src="images/img_twitter.svg"
                    alt="twitter_one"
                    className="absolute bottom-0 left-[41%] top-0 my-auto h-[18px] w-[18px]"
                  />
                </div>
                <div className="flex w-[7%] items-center md:w-full">
                  <Text as="p" className="relative z-[1] mb-[7px] self-end text-center !text-white-A700">
                    Upload
                  </Text>
                  <div className="relative ml-[-43px] h-[40px] flex-1 rounded bg-blue-A700" />
                </div>
              </div>
            </div>
          </div>

          {/* file requirements section */}
          <div className="container-sm mb-[5px] flex flex-col">
            <div className="flex self-start">
              <Heading size="md" as="h2" className="self-end !font-semibold">
                File Requirements
              </Heading>
            </div>
            <div className="mt-2 flex self-start">
              <Text as="p">Accepted file formats: .bin, .hex, .txt</Text>
            </div>
            <div className="flex self-start">
              <Text as="p">Maximum file size: 5MB</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
