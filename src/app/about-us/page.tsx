import React from "react";

export default function AboutUsPage() {
  return (
    <div className="h-screen grid bg-[whitesmoke] py-7">
      <p className="m-auto">
        <div className="flex flex-col gap-3 bg-gray-200 mx-auto w-4/5 p-7 rounded-lg">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p>Welcome to Chh1p!</p>
          <h1 className="text-xl font-bold">Our Mission</h1>
          <p>
            At [Company Name], our mission is to [describe the purpose or goal
            of your organization/business].
          </p>
          <h1 className="text-xl font-bold">Who We Are</h1>
          <p>
            [Company Name] is a [describe your organization/business type, e.g.,
            company, nonprofit organization, etc.] dedicated to [briefly state
            your organization/business's main activities or objectives]. We are
            committed to [mention any core values or principles that guide your
            organization/business].
          </p>
          <h1 className="text-xl font-bold">What We Do</h1>
          <p>
            We specialize in [briefly describe your main products, services, or
            activities]. Our team of professionals works diligently to [mention
            any unique aspects or advantages of your products/services].
          </p>
          <h1 className="text-xl font-bold">Our Values</h1>
          <p>
            Quality: We prioritize quality in everything we do. <br />
            Integrity: We conduct ourselves with honesty and integrity. <br />
            Innovation: We strive for innovation and continuous improvement.{" "}
            <br />
            Customer Satisfaction: We prioritize customer satisfaction and
            strive to exceed expectations.
          </p>
          <h1 className="text-xl font-bold">Contact Us</h1>
          <p>
            We'd love to hear from you! If you have any questions or inquiries,
            please don't hesitate to contact us at [provide contact
            information]. Thank you for your interest in [Company Name]!
          </p>
        </div>
      </p>
    </div>
  );
}
