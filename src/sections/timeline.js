import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
  CodeIcon,
  DatabaseIcon,
  ShareIcon,
} from '@heroicons/react/outline';

const TimelineElement = ({ TimelineElementData }) => (
  <VerticalTimelineElement
    date={TimelineElementData.date}
    iconStyle={{ background: 'rgb(80, 70, 229)', color: '#fff' }}
    icon={TimelineElementData.icon}
  >
    <div key={1}>
      <div>
        <span className="inline-block">
          <span
            className={`${TimelineElementData.color} inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium`}
          >
            {TimelineElementData.tag}
          </span>
        </span>
      </div>
      <span className="block mt-4">
        <h3 className=" text-xl font-semibold text-gray-900">
          {TimelineElementData.title}
        </h3>
        <p className="mt-3 text-base text-gray-500">
          {TimelineElementData.description}
        </p>
      </span>
    </div>
  </VerticalTimelineElement>
);
const TimelineElementDataList = [
  {
    date: '28 October 2021',
    title: 'SkillNer First release',
    description:
      'We are releasing the frist open source version of skillner for free.',
    tag: 'Codebase',
    color: 'bg-red-200',
    icon: <CodeIcon />,
  },
  {
    date: '10 November 2021',
    title: 'Open labor knowledge graph V.1 ',
    description: (
      <span>
        We are releasing the first{' '}
        <span class="font-bold text-black">Morrocan labor knowldge graph </span>{' '}
        using skillner on published job ads .{' '}
      </span>
    ),
    tag: 'Datasets',
    color: 'bg-yellow-200',
    icon: <ShareIcon />,
  },
  {
    date: '21 December 2021',
    title: 'Job Title ontology mapper',
    description: 'A new product is joining the skilllner stack very soon ..',
    tag: 'Codebase',
    color: 'bg-red-200',
    icon: <CodeIcon />,
  },
];
export default function Timeline() {
  return (
    <div>
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>

          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              SkillNer RoadMap
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              SkillNer is a skill extractor at the core yet, it is just the
              <span class="font-bold"> first brick of a large toolkit </span> to
              help labor market actors.
            </p>
          </div>

          <svg
            className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>
        </div>
        <VerticalTimeline>
          {TimelineElementDataList.map((TimelineElementData, i) => (
            <TimelineElement TimelineElementData={TimelineElementData} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
