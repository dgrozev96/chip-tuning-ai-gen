import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const data = [
  {
    stage1Tuning: "Stage 1 Tuning",
    optimizeyour: "Optimize your engine&#39;s performance with basic tuning.",
    price: "$150",
    improvedfuel: "- Improved Fuel Efficiency",
    betterthrottle: "- Better Throttle Response",
    minorpower: "- Minor Power Increase",
  },
  {
    stage1Tuning: "Stage 2 Tuning",
    optimizeyour: "Advanced tuning for significant power gains.",
    price: "$300",
    improvedfuel: "- All Stage 1 Benefits",
    betterthrottle: "- High-Performance Tuning",
    minorpower: "- Custom Modifications",
  },
  {
    stage1Tuning: "Stage 3 Tuning",
    optimizeyour: "Ultimate tuning for maximum performance and efficiency.",
    price: "$500",
    improvedfuel: "- All Stage 2 Benefits",
    betterthrottle: "- Custom ECU Mapping",
    minorpower: "- Track-Ready Performance",
  },
];
const tableData = [
  { servicetwo: "Price", stageCounter: "$150", stageCounter1: "$300", stageCounter2: "$500" },
  { servicetwo: "Fuel Efficiency", stageCounter: "Improved", stageCounter1: "Improved", stageCounter2: "Optimized" },
  { servicetwo: "Power Increase", stageCounter: "Minor", stageCounter1: "Significant", stageCounter2: "Maximum" },
  { servicetwo: "Custom ECU Mapping", stageCounter: "-", stageCounter1: "Available", stageCounter2: "Included" },
];

type TableRowType = { servicetwo: string; stageCounter: string; stageCounter1: string; stageCounter2: string };

export default function FrameTwoPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("servicetwo", {
        cell: (info) => <Heading as="h6">{info?.getValue?.()}</Heading>,
        header: (info) => (
          <Heading as="h3" className="py-[18px] pl-4 !font-bold">
            Service
          </Heading>
        ),
        meta: { width: "485px" },
      }),
      tableColumnHelper.accessor("stageCounter", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h4" className="py-[18px] !font-bold">
            Stage 1
          </Heading>
        ),
        meta: { width: "246px" },
      }),
      tableColumnHelper.accessor("stageCounter1", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h5" className="py-[18px] !font-bold">
            Stage 2
          </Heading>
        ),
        meta: { width: "258px" },
      }),
      tableColumnHelper.accessor("stageCounter2", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h6" className="py-[18px] !font-bold">
            Stage 3
          </Heading>
        ),
        meta: { width: "242px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Choose Your Tuning Stage - Optimize Your Vehicle's Performance</title>
        <meta
          name="description"
          content="Select from Stage 1, 2, or 3 chip tuning to enhance fuel efficiency and power. Custom file modification services available for all vehicle models."
        />
      </Helmet>

      {/* services overview section */}
      <div className="w-full bg-gray-100">
        <div className="flex flex-col gap-[39px] p-4">
          {/* service categories section */}
          <div className="container-xs mt-[23px] flex flex-col items-start gap-6">
            <Heading size="xl" as="h1" className="ml-[359px] text-center md:ml-0">
              Service Categories
            </Heading>
            <div className="flex gap-8 self-center px-[493px] md:px-5">
              <div className="flex">
                <Text as="p" className="!text-blue-A700">
                  Chip Tuning
                </Text>
              </div>
              <div className="flex">
                <Text as="p" className="!text-blue-A700">
                  File Modification
                </Text>
              </div>
            </div>
          </div>

          {/* chiptuning services section */}
          <div className="container-xs flex flex-col gap-4">
            <div className="flex self-start">
              <Heading size="lg" as="h2">
                Chip Tuning
              </Heading>
            </div>

            {/* chiptuning options section */}
            <div className="flex gap-6 md:flex-col">
              {data.map((d, index) => (
                <div
                  key={"liststage1Tunin" + index}
                  className="flex w-full flex-col items-center rounded-lg bg-white-A700 p-6 shadow-xs sm:p-5"
                >
                  <div className="flex self-start">
                    <Heading size="s" as="h3" className="self-end">
                      {d.stage1Tuning}
                    </Heading>
                  </div>
                  <div className="mt-2 flex self-stretch">
                    <Text as="p" className="w-[92%] leading-6">
                      {d.optimizeyour}
                    </Text>
                  </div>
                  <div className="mt-4 flex self-start">
                    <Heading size="md" as="h4">
                      {d.price}
                    </Heading>
                  </div>
                  <div className="mt-4 flex flex-col self-stretch">
                    <div className="flex self-start">
                      <Text as="p">{d.improvedfuel}</Text>
                    </div>
                    <div className="flex self-start">
                      <Text as="p">{d.betterthrottle}</Text>
                    </div>
                    <div className="flex self-start">
                      <Text as="p">{d.minorpower}</Text>
                    </div>
                  </div>
                  <Button shape="round" className="mt-4 w-full sm:px-5">
                    Select
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* file modification services section */}
          <div className="container-xs flex flex-col gap-4">
            <div className="flex self-start">
              <Heading size="lg" as="h2">
                File Modification
              </Heading>
            </div>
            <div className="rounded-lg bg-white-A700 p-6 shadow-xs sm:p-5">
              <div className="flex flex-col">
                <div className="flex self-start">
                  <Heading size="s" as="h3" className="self-start">
                    Custom File Service
                  </Heading>
                </div>
                <div className="mt-2 flex self-start">
                  <Text as="p">Tailored files for your specific vehicle requirements.</Text>
                </div>
                <div className="mt-4 flex self-start">
                  <Heading size="md" as="h4" className="self-end">
                    Starting at $100
                  </Heading>
                </div>
                <div className="mt-4 flex flex-col">
                  <div className="flex self-start">
                    <Text as="p">- Customized to Vehicle Specs</Text>
                  </div>
                  <div className="flex self-start">
                    <Text as="p">- Dyno-Tested Files</Text>
                  </div>
                  <div className="flex self-start">
                    <Text as="p">- Support for Various Models</Text>
                  </div>
                </div>
                <Button shape="round" className="mt-4 w-full sm:px-5">
                  Select
                </Button>
              </div>
            </div>
          </div>

          {/* service comparison chart section */}
          <div className="container-xs mb-16 flex flex-col items-start gap-[25px]">
            <Heading size="xl" as="h2" className="ml-[342px] text-center md:ml-0">
              Service Comparison
            </Heading>
            <ReactTable
              size="xs"
              bodyProps={{ className: "" }}
              headerProps={{ className: "bg-gray-200 flex-wrap" }}
              rowDataProps={{ className: "bg-[url(/public/images/img_group_47.svg)] bg-cover bg-no-repeat flex-wrap" }}
              className="self-stretch rounded-lg bg-white-A700 shadow-xs"
              columns={tableColumns}
              data={tableData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
