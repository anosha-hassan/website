import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";

const aboutImage = "/images/about-image.jpg";
const aboutImage2 = "/images/about2-image.jpg";
const aboutImage3 = "/images/about3-image.jpg";

const About = () => {
  const aboutData = [
    {
      header: "Competitive Pricing",
      description: "We offer the most competitive prices to ensure value for money in all our packages.",
    },
    {
      header: "Best Services",
      description: "Experience top-notch services tailored to meet your travel needs and expectations.",
    },
    {
      header: "Worldwide Coverage",
      description: "Our packages are available globally, ensuring a seamless travel experience anywhere.",
    },
  ];

  return (
    <section>
      <Wrapper>
        <div>
          {/* About Section */}
          <div className="flex justify-between pt-40">
            {/* Main Image */}
            <div>
              <Image src={aboutImage} alt="About us banner" width={600} height={530} />
            </div>

            {/* Text Content */}
            <div className="max-w-xl space-y-4">
              <h1 className="text-xl font-medium text-emerald-700 tracking-wider">ABOUT US</h1>
              <h2 className="text-5xl font-bold">We Provide Best Tour Packages In Your Budget</h2>
              <p className="text-slate-500 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>

              {/* Secondary Images */}
              <div className="flex gap-x-4 pb-2">
                <div>
                  <Image src={aboutImage2} alt="Team discussion" width={400} height={200} className="rounded-md" />
                </div>
                <div>
                  <Image src={aboutImage3} alt="Tourist group" width={400} height={200} className="rounded-md" />
                </div>
              </div>

              {/* Call-to-Action Button */}
              <Button text="Read More" />
            </div>
          </div>

          {/* Boxes Section */}
          <div className="flex gap-x-4 pt-10 pb-5">
            {aboutData.map((item, i) => (
              <div key={i} className="border rounded-md shadow-lg w-4/12 px-8 py-4 cursor-pointer">
                <h4 className="text-xl font-medium text-emerald-700 pb-2">{item.header}</h4>
                <p className="text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
