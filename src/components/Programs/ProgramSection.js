import React from 'react';
import Filter from './filter'
function ProgramSection() {
  const CourseOptions = [
    { id: 1, label: 'Math' },
    { id: 2, label: 'Physical' },
    { id: 3, label: 'Science' },
  ];
  const GradeOptions = [
    { id: 1, label: 'Grade 6' },
    { id: 2, label: 'Grade 7' },
    { id: 3, label: 'Grade 8' },
    { id: 4, label: 'Grade 9' },
    { id: 5, label: 'Grade 10' },
    { id: 6, label: 'Grade 11' },
    { id: 7, label: 'Grade 12' },

  ];
  const CourseTypeOptions = [
    { id: 1, label: 'Online Course' },
    { id: 2, label: 'Recorded Course' },


  ];
  return (
    <section className="bg-white dark:bg-gray-900">

      <div className="container px-6 py-8 mx-auto">
        <div className="lg:flex lg:-mx-2">
          <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">

          <Filter title="Course" options={CourseOptions} />
          <Filter title="Grade" options={GradeOptions} />
          <Filter title="CourseType" options={CourseTypeOptions} />

          </div>

          <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5">
            <div className="flex items-center justify-between text-sm tracking-widest uppercase">
              <p className="text-gray-500 dark:text-gray-300">6 Items</p>
              <div className="flex items-center">
                <p className="text-gray-500 dark:text-gray-300">Sort</p>
                <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                  <option value="#">Newest</option>
                  <option value="#">Name</option>

                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, index) => (
                <div key={index} className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                  <img
                    className="object-cover w-full rounded-md h-72 xl:h-80"
                    src={product.image}
                    alt={product.name}
                  />
                  <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{product.name}</h4>
                  <p className="text-blue-500">{product.intro}</p>


                  <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">

                    <span className="mx-1">Watch Now</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramSection;

// Sample product data, you can replace it with your data
const products = [
  {
    name: 'Math101-01',
    intro:"Intro, Hello World Java",
    image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',

  },
  {
    name: 'Physics',
    intro: 'Testing',
    image: 'https://images.unsplash.com/photo-1633493702341-4d04841df53b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',
  },
  {
    name: 'Science',
    intro: 'Testing',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },

];

