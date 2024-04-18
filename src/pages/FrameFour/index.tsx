import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img, TextArea } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const table2Data = [
  { ticketid: "#1231", issue: "Payment not processed", datesubmitted: "2023-03-01", status: "Resolved" },
  { ticketid: "#1230", issue: "Error during file upload", datesubmitted: "2023-02-25", status: "Resolved" },
  { ticketid: "#1229", issue: "Question about chip tuning", datesubmitted: "2023-02-20", status: "Resolved" },
];

type Table2RowType = { ticketid: string; issue: string; datesubmitted: string; status: string };

export default function FrameFourPage() {
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper<Table2RowType>();
    return [
      table2ColumnHelper.accessor("ticketid", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h2" className="py-[18px] pl-[35px] !font-bold sm:pl-5">
            Ticket ID
          </Heading>
        ),
        meta: { width: "243px" },
      }),
      table2ColumnHelper.accessor("issue", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h3" className="py-[18px] !font-bold">
            Issue
          </Heading>
        ),
        meta: { width: "469px" },
      }),
      table2ColumnHelper.accessor("datesubmitted", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h4" className="py-[18px] !font-bold">
            Date Submitted
          </Heading>
        ),
        meta: { width: "314px" },
      }),
      table2ColumnHelper.accessor("status", {
        cell: (info) => (
          <Text as="p" className="!text-red-700">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h5" className="py-[18px] !font-bold">
            Status
          </Heading>
        ),
        meta: { width: "205px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Submit a Support Ticket - Get Help Now</title>
        <meta
          name="description"
          content="Need assistance? Submit a support ticket to describe your issue, check ticket status, or view ticket history. Our support team is ready to help with any engine tuning or file service problems."
        />
      </Helmet>

      {/* support ticket section */}
      <div className="w-full bg-gray-100">
        <div className="flex flex-col p-4">
          <div className="container-xs mt-6 rounded-lg bg-white-A700 p-[22px] shadow-xs md:p-5">
            <div className="flex flex-col items-start gap-[25px]">
              <Heading size="xl" as="h1" className="ml-[264px] text-center md:ml-0">
                Submit a Support Ticket
              </Heading>
              <div className="flex flex-col gap-4 self-stretch">
                <div className="flex flex-col gap-2 pb-1.5">
                  <div className="flex self-start">
                    <Text size="md" as="p">
                      Describe Your Issue
                    </Text>
                  </div>
                  <TextArea
                    shape="round"
                    name="frame"
                    placeholder={`Please provide a detailed description of your issue.`}
                    className="text-gray-400 sm:pb-5 sm:pr-5"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex self-start">
                    <Text size="md" as="p">
                      Issue Severity
                    </Text>
                  </div>
                  <div className="h-[41px] rounded border border-solid border-gray-200 bg-white-A700" />
                </div>
                <Button shape="round" className="w-full sm:px-5">
                  Submit Ticket
                </Button>
              </div>
            </div>
          </div>

          {/* live chat section */}
          <div className="container-xs relative mt-[23px] h-[265px] md:h-auto">
            <div className="mb-[37px] flex flex-col items-center justify-center gap-1.5 rounded-[24px] bg-blue-A700 p-[15px] shadow-xs">
              <Text as="p" className="h-px self-end text-center !text-white-A700">
                Live Chat
              </Text>
              <Img src="images/img_frame_16x16.svg" alt="image" className="h-[16px] w-[16px]" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col gap-4">
              <div className="flex self-start">
                <Heading size="lg" as="h2">
                  Ticket Status
                </Heading>
              </div>
              <div className="rounded-lg bg-white-A700 p-[23px] shadow-xs sm:p-5">
                <div>
                  <div className="flex justify-between gap-5 py-4">
                    <div className="flex">
                      <Text as="p">Issue with engine tuning - #1234</Text>
                    </div>
                    <Text
                      size="xs"
                      as="p"
                      className="flex h-[24px] items-center justify-center rounded-[12px] bg-amber-600 px-3 pb-px pt-[5px] !text-white-A700"
                    >
                      In Progress
                    </Text>
                  </div>
                  <div className="flex items-center">
                    <div className="flex h-[57px] flex-1 items-center bg-[url(/public/images/img_group_47.svg)] bg-cover bg-no-repeat py-4 md:h-auto">
                      <div className="flex">
                        <Text as="p">Unable to access file service - #1233</Text>
                      </div>
                    </div>
                    <Text
                      size="xs"
                      as="p"
                      className="relative ml-[-54px] flex h-[24px] items-center justify-center rounded-[12px] bg-green-700 px-3 pb-px pt-[5px] !text-white-A700"
                    >
                      Open
                    </Text>
                  </div>
                  <div className="flex items-center">
                    <div className="flex h-[57px] flex-1 items-center bg-[url(/public/images/img_group_47.svg)] bg-cover bg-no-repeat py-4 md:h-auto">
                      <div className="flex self-start">
                        <Text as="p">Question about pricing - #1232</Text>
                      </div>
                    </div>
                    <Button color="blue_gray_700" size="xs" className="relative ml-[-61px] min-w-[62px] rounded-[12px]">
                      Closed
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ticket history section */}
          <div className="container-xs mt-6 flex self-start">
            <Heading size="lg" as="h2">
              Ticket History
            </Heading>
          </div>
          <ReactTable
            size="xs"
            bodyProps={{ className: "" }}
            headerProps={{ className: "bg-gray-200 flex-wrap" }}
            rowDataProps={{ className: "flex-wrap" }}
            className="mb-[5px] mt-10 rounded-lg bg-white-A700 shadow-xs"
            columns={table2Columns}
            data={table2Data}
          />
        </div>
      </div>
    </>
  );
}
