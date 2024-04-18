import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const data = [
  { starterpack: "Starter Pack", price: "$50", includes100: "Includes 100 credits" },
  { starterpack: "Professional Pack", price: "$200", includes100: "Includes 500 credits" },
  { starterpack: "Ultimate Pack", price: "$500", includes100: "Includes 1500 credits" },
];
const table1Data = [
  { date: "2023-04-01", package: "Professional Pack", amount: "$200", status: "Completed" },
  { date: "2023-03-22", package: "Starter Pack", amount: "$50", status: "Completed" },
  { date: "2023-03-15", package: "Ultimate Pack", amount: "$500", status: "Pending" },
];

type Table1RowType = { date: string; package: string; amount: string; status: string };

export default function FrameThreePage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper<Table1RowType>();
    return [
      table1ColumnHelper.accessor("date", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h3" className="py-[18px] pl-4 !font-bold">
            Date
          </Heading>
        ),
        meta: { width: "307px" },
      }),
      table1ColumnHelper.accessor("package", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h4" className="py-[18px] !font-bold">
            Package
          </Heading>
        ),
        meta: { width: "410px" },
      }),
      table1ColumnHelper.accessor("amount", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h5" className="py-[18px] !font-bold">
            Amount
          </Heading>
        ),
        meta: { width: "243px" },
      }),
      table1ColumnHelper.accessor("status", {
        cell: (info) => (
          <Text as="p" className="!text-green-700">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h6" className="py-[18px] !font-bold">
            Status
          </Heading>
        ),
        meta: { width: "271px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Credit Packages - Choose Your Ideal Pack</title>
        <meta
          name="description"
          content="Explore our Credit Packages: Starter, Professional, and Ultimate Packs. Purchase credits securely with Credit Card or PayPal and enjoy promotional offers. Check your transaction history for all purchases."
        />
      </Helmet>

      {/* credit packages section */}
      <div className="w-full bg-gray-100">
        <div className="flex flex-col px-4">
          {/* credit packages list section */}
          <div className="container-xs flex flex-col items-start justify-center gap-[25px] py-[38px] sm:py-5">
            <Heading size="xl" as="h1" className="ml-[394px] text-center md:ml-0">
              Credit Packages
            </Heading>
            <div className="flex gap-6 self-stretch md:flex-col">
              {data.map((d, index) => (
                <div
                  key={"liststarterpack" + index}
                  className="flex w-full flex-col items-start rounded-lg bg-white-A700 p-6 shadow-xs sm:p-5"
                >
                  <div className="flex">
                    <Heading as="h2" className="ml-[81px] self-start text-center md:ml-0">
                      {d.starterpack}
                    </Heading>
                  </div>
                  <div className="mt-2 flex self-center">
                    <Text size="md" as="p" className="self-end text-center">
                      {d.price}
                    </Text>
                  </div>
                  <div className="flex">
                    <Text as="p" className="ml-6 text-center md:ml-0">
                      {d.includes100}
                    </Text>
                  </div>
                  <div className="ml-[105px] mt-4 flex w-[42%] rounded bg-blue-A700 py-2 md:ml-0 md:w-full md:p-5">
                    <Text as="p" className="text-center !text-white-A700">
                      Purchase
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* purchase options section */}
          <div className="container-xs flex flex-col items-start justify-center gap-[25px] bg-white-A700 py-[38px] md:p-5 sm:py-5">
            <Heading size="xl" as="h2" className="ml-[376px] text-center md:ml-0">
              Purchase Options
            </Heading>
            <div className="flex gap-[26px] self-center px-[479px] md:px-5">
              <Button
                shape="square"
                leftIcon={
                  <Img src="images/img_frame_white_a700.svg" alt="Frame" className="mr-[-39px] h-[16px] w-[16px]" />
                }
                className="min-w-[137px] sm:px-5"
              >
                Credit Card
              </Button>
              <Button
                shape="round"
                leftIcon={
                  <Img
                    src="images/img_frame_white_a700_16x16.svg"
                    alt="Frame"
                    className="mr-[-22px] h-[16px] w-[16px]"
                  />
                }
                className="min-w-[101px] sm:pr-5"
              >
                PayPal
              </Button>
            </div>
          </div>

          {/* transaction history section */}
          <div className="container-xs flex flex-col items-start gap-6 py-[39px] sm:py-5">
            <Heading size="xl" as="h2" className="ml-[349px] text-center md:ml-0">
              Transaction History
            </Heading>
            <ReactTable
              size="xs"
              bodyProps={{ className: "" }}
              headerProps={{ className: "bg-gray-200 flex-wrap" }}
              rowDataProps={{ className: "bg-[url(/public/images/img_group_47.svg)] bg-cover bg-no-repeat flex-wrap" }}
              className="self-stretch rounded-lg bg-white-A700 shadow-xs"
              columns={table1Columns}
              data={table1Data}
            />
          </div>

          {/* promotional offers section */}
          <div className="container-xs flex flex-col items-start justify-center gap-[27px] bg-gray-200 py-9 md:p-5 sm:py-5">
            <Heading size="xl" as="h2" className="ml-[358px] text-center md:ml-0">
              Promotional Offers
            </Heading>
            <div className="flex flex-col items-center gap-4 self-stretch">
              <div className="flex self-start">
                <Text as="p" className="ml-[57px] text-center md:ml-0">
                  Get an extra 10% credits with the purchase of any pack! Limited time offer.
                </Text>
              </div>
              <div className="flex w-[11%] rounded bg-amber-600 py-2 md:w-full">
                <Text as="p" className="text-center !text-white-A700">
                  Redeem Offer
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
