import React from "react";
import BlogCard from "../../organism/BlogCard";
import { PageTemplate } from "../../template/PageTemplate";

export default function BlogPage() {
  return (
    <PageTemplate>
      <React.Fragment>
        <div className="p-8 text-midblack font-['sans']">
          <div className="text-xlg pb-6">Welcome to the Wayhome Blog</div>
          <div className="text-base2">Latest Articles</div>
        </div>
        <div className="p-">
          <div className="flex justify-between px-4">
            <BlogCard
              src="https://www.wayhome.co.uk/blog/images/blog-imagery-1-.png"
              width={""}
              height={""}
              content="Help to Buy has now closed to new applicants. Heres everything you need to know about the scheme ending and alternative options for first-time buyers."
              title="Help to Buy is Ending: What are the alternatives in 2022?"
            />
            <BlogCard
              src="	https://www.wayhome.co.uk/blog/images/screenshot-2021-10-25-at-13.47.21.png"
              width={""}
              height={""}
              content="If youre looking for Shariah compliant ways to buy a home, check out our introduction to Islamic mortgages and how we might be able to help you now that Gatehouse and Al Rayan no longer offer Islamic mortgages."
              title="Islamic Mortgages | The Shariah compliant way to buy in 2022"
            />
            <BlogCard
              src="	https://www.wayhome.co.uk/blog/images/viktor-mogilat-akwfz5-wyha-unsplash.jpg"
              width={""}
              height={""}
              content="What alternative options are available and how can Wayhome help the Islamic community access homeownership?"
              title="Why cant Muslims get a mortgage"
            />
          </div>
        </div>
      </React.Fragment>
    </PageTemplate>
  );
}
