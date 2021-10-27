/* This example requires Tailwind CSS v2.0+ */
import MSDA from '../icons/msda.png';
import UM6P from '../icons/um6p.png';
export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Used by MSDA -UM6P
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              The Modeling, Simulation and Data Analysis (MSDA) is a Research
              Program on mathematical and phenomenological modeling, numerical
              simulation and data analysis.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="https://msda.um6p.ma/home"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Visit MSDA
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-16" src={MSDA} alt="msda" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-16" src={UM6P} alt="um6p" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
