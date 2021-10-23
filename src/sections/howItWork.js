import React from 'react';
/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
  LinkIcon,
  ChartPieIcon,
  DocumentSearchIcon,
} from '@heroicons/react/outline';
import Work from '../icons/work.png';

const transferFeatures = [
  {
    id: 1,
    name: 'Maximum extraction',
    description:
      'SkillNer create many forms of the input text  to extract the most of it, from   trivial skills like IT tool names  to implicit ones hidden by gramatical ambiguties. ',
    icon: DocumentSearchIcon,
  },
  {
    id: 2,
    name: ' Skill linkage ',
    description: (
      <span>
        SkillNer link extracted entities in the processed text to a normalised
        skill database (
        <a
          href="https://skills.emsidata.com/"
          className="font-bold  hover:text-purple-700"
        >
          EMSI skill database
        </a>
        ) updated consistently ,giving the user access to skill metatdata and
        avoiding duplication .
      </span>
    ),
    icon: LinkIcon,
  },
  {
    id: 3,
    name: 'Blazing fast',
    description:
      'Our codebase is build with scale in mind , making it able to process thousand of sentences in minutes .',
    icon: LightningBoltIcon,
  },
  {
    id: 4,
    name: 'Modular by default',
    description: (
      <span>
        Skillner codebase is modular giving you the freedom to{' '}
        <span className="font-bold  ">plug or unplug extracting modules</span> .
        Not only code <span className="font-bold  ">but also data layer </span>,
        we've standardised the data model fed to skillner so you can plug any
        database easily
      </span>
    ),
    icon: ChartPieIcon,
  },
];

export default function Features() {
  return (
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
            How SkillNer Works ?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            SkillNer have a Lego-like architecture, containing modules that
            specialize in a type of entity extraction or cleaning.
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
        <img className="relative mx-auto mt-4" width={600} src={Work} alt="" />
      </div>
    </div>
  );
}
