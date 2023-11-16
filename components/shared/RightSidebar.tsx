import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderTags from "./RenderTags";
const popularTags = [
  { _id: 1, name: "javascript", totalQuestions: 5 },
  { _id: 2, name: "reduxtolkit", totalQuestions: 3 },
  { _id: 3, name: "typescript", totalQuestions: 2 },
  { _id: 4, name: "seo", totalQuestions: 1 },
  { _id: 5, name: "nextjs", totalQuestions: 4 },
];
const hotQuestions = [
  {
    _id: 1,
    title: "How to create a new project in Nextjs using server components?",
  },
  {
    _id: 2,
    title:
      "Would it be appropriate to point out an error in another paper during a referee report?",
  },
  { _id: 3, title: "How can an airconditioning machine exist ?" },
  {
    _id: 4,
    title:
      "How to create a new project in Nextjs using server components asdasd aasd awwqfadsa aasdas awa awewtsdegsdgsd?",
  },
  { _id: 5, title: "How to create a new ?" },
];
const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 custom-scrollbar sticky right-0 top-0 flex h-screen w-[360px] flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((item) => (
            <Link
              href={`/questions/${item._id}`}
              key={item._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{item.title}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="arrowR"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">popular</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((item) => (
            <RenderTags
              key={item._id}
              _id={item._id}
              name={item.name}
              totalQuestions={item.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
