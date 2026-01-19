'use client';

import Header from '../components/Header';
import AnimatedEyes from '../components/AnimatedEyes';
import { ScrollAnimatedElement, WigglyLine } from '../components/ScrollAnimations';
import InteractiveButton from '../components/InteractiveButton';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-24">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20minimal%20black%20and%20white%20hand-drawn%20sketchy%20lines%20and%20doodles%20scattered%20across%20white%20background%2C%20very%20light%20and%20subtle%20texture%2C%20artistic%20zine%20style%20illustration&width=1920&height=1080&seq=bg1&orientation=landscape')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <ScrollAnimatedElement animation="fade">
          <h1 className="text-7xl md:text-9xl font-bold text-center mb-8 leading-tight">
            Welcome to<br />
            <span className="italic">End-to-End Analytics</span>
          </h1>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement animation="fade" delay={300}>
          <AnimatedEyes />
        </ScrollAnimatedElement>

        <ScrollAnimatedElement animation="fade" delay={600}>
          <p className="text-xl md:text-2xl text-center max-w-2xl mt-8 leading-relaxed">
            Where data turns into decisions — end-to-end analytics that drive growth.
          </p>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement animation="fade" delay={900}>
          <div className="flex gap-4 mt-12">
            <InteractiveButton onClick={() => handleScrollToSection('contact')}>Explore Services</InteractiveButton>
            <InteractiveButton variant="secondary" onClick={() => handleScrollToSection('contact-form')}>Get In Touch</InteractiveButton>
          </div>
        </ScrollAnimatedElement>
      </section>

      <WigglyLine />

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimatedElement animation="wiggle">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              About
            </h2>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollAnimatedElement animation="fade">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I help businesses turn raw data into clear, decision-ready insights.
From SQL database design and data modeling to dashboards and analytics workflows, I build end-to-end solutions that reduce manual effort and improve visibility.
                </p>
                <p className="text-lg leading-relaxed">
                  I focus on practical analytics — fast delivery, clean logic, and insights that teams can actually use.
                </p>
              </div>
            </ScrollAnimatedElement>

            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=minimalist%20black%20and%20white%20hand-drawn%20illustration%20of%20creative%20workspace%20with%20sketches%2C%20pencils%2C%20and%20artistic%20tools%20scattered%20on%20desk%2C%20clean%20simple%20background%2C%20zine%20style%20line%20art%2C%20detailed%20sketch&width=600&height=400&seq=about1&orientation=landscape"
                alt="Creative workspace illustration"
                className="w-full h-80 object-cover object-top rounded-lg border-2 border-black/10"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center">
                <span className="text-2xl animate-pulse">✨</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Project Showcase Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
              Featured Projects
            </h2>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={200}>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              A selection of real-world analytics projects focused on solving business problems end to end.
            </p>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: "Product-Led Growth (PLG) Analytics",
                category: "END TO END ANALYTICS",
                image: "https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/46985b5da0139f48f968ee1d80f52768.png",
                description: "User funnel, cohort, retention & revenue analysis for SaaS growth decisions.",
                link: "#plg-case-study"
              },
              {
                title: "SaaS SQL Analytics System",
                category: "MySQL DATABASE DESIGN",
                image: "https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/827c80cc3047fb371eca5707d4ab632a.png",
                description: "Designed analytics-ready MySQL schema with advanced SQL for churn & revenue."
              },
              {
                title: "Enterprise Intelligence Dashboard",
                category: "DATA DASHBOARD",
                image: "https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/2243d1c5c707c144eedda79ff416474e.png",
                description: "Executive-level budget, revenue & operational dashboards for decision makers."
              },
              {
                title: "Regional Market Performance",
                category: "DATA DASHBOARD",
                image: "https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/eaa1443ef91f0109b3c9527ea5f7edc2.png",
                description: "Executive dashboard analyzing regional performance, growth trends, and category-level insights."
              },
              {
                title: "Sales Analysis Dashboard",
                category: "POWER BI MCP SERVER",
                image: "https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/9c768ccb5b3455e8a02e85190d8ad6f5.png",
                description: "Project with Power BI MCP Server | AI Data Modeling & Dashboard"
              }
            ].map((project, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 100}>
                {project.link ? (
                  <a href={project.link} className="block">
                    <div className="group cursor-pointer">
                      <div className="relative overflow-hidden border-2 border-black/10 hover:border-black/30 transition-all duration-300 mb-4">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>
                      <div className="space-y-2">
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden border-2 border-black/10 hover:border-black/30 transition-all duration-300 mb-4">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                )}
              </ScrollAnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <WigglyLine />

      {/* Featured Case Study Section */}
      <section id="plg-case-study" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <div className="text-center mb-12">
              <span className="inline-block bg-black text-white px-6 py-2 text-sm font-bold mb-6 uppercase tracking-wide">Featured</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Product-Led Growth Funnel Analysis — SaaS User Journey &amp; Experimentation
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                An end-to-end analytics case study that transforms raw SaaS product events into actionable growth insights using MySQL, SQL analysis, Power BI dashboards, and A/B testing.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {['MySQL', 'SQL', 'Power BI', 'PLG Analytics', 'Funnel Analysis', 'A/B Testing', 'Cohort Analysis'].map((tag, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 text-sm font-medium border border-black/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={200}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/46985b5da0139f48f968ee1d80f52768.png"
                  alt="PLG Analytics Overview"
                  className="w-full h-64 md:h-96 object-cover object-top border-2 border-black/10"
                />
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 md:p-8 border-2 border-red-200 h-full flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-red-900">Problem Statement</h3>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  Despite strong user acquisition and onboarding, the SaaS product struggled to convert users into paying customers. While activation rates were healthy, a significant drop-off occurred during feature adoption, creating an invisible mid-funnel bottleneck. The business lacked a clear, data-driven understanding of where users disengaged, why experiments underperformed, and how much revenue was being lost—making growth decisions reactive instead of strategic.
                </p>
              </div>
            </div>
          </ScrollAnimatedElement>

          <WigglyLine />

          <div className="space-y-20 md:space-y-32 my-20">
            <ScrollAnimatedElement animation="fade">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative">
                  <img 
                    src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/827c80cc3047fb371eca5707d4ab632a.png"
                    alt="SQL Schema Setup"
                    className="w-full h-64 md:h-96 object-cover object-top border-2 border-black/10"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">SQL Schema &amp; Data Model Design</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Designed a normalized MySQL schema using fact and dimension tables to model SaaS user behavior at scale. The structure supports event-level tracking, A/B experiments, and lifecycle analysis across the entire product journey—enabling accurate funnel, cohort, and revenue analytics.
                  </p>
                </div>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">SQL-Driven Funnel &amp; A/B Test Computation</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Built advanced SQL queries to calculate funnel conversions, drop-offs, PQL qualification, and paid conversions. Implemented variant-level A/B test analysis to measure conversion lift, statistical significance, and experiment performance across onboarding, pricing, and feature adoption.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <img 
                    src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/ba1b9c40dde543cdc40683b1055a12bf.png"
                    alt="SQL Queries"
                    className="w-full h-64 md:h-96 object-cover object-top border-2 border-black/10"
                  />
                </div>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative">
                  <img 
                    src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/35a5b2b9769b8fe2e60f120ddfe94cc7.png"
                    alt="Excel Analysis"
                    className="w-full h-64 md:h-96 object-cover object-top border-2 border-black/10"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Structured Analysis &amp; Metric Validation</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Used Excel to validate SQL outputs, summarize experiment results, and perform quick sanity checks on conversion rates, cohorts, and revenue metrics. This step ensured analytical accuracy before executive-level reporting and dashboarding.
                  </p>
                </div>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Product Funnel Conversion Dashboard</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Built an executive-ready Power BI dashboard visualizing the end-to-end user journey: signup → activation → feature adoption → PQL → paid. The dashboard highlights conversion leaks, stage-wise drop-offs, and KPI performance in a clear, decision-friendly format.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <img 
                    src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/69bb1dd5a3446cabea006fb1ef7af5cf.png"
                    alt="Power BI Funnel Dashboard"
                    className="w-full h-64 md:h-96 object-cover object-top border-2 border-black/10"
                  />
                </div>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative">
                  <img 
                    src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/2179de59e56bc6d5c04766dda8ea0887.png"
                    alt="Experiments Dashboard"
                    className="w-full h-64 md:h-96 object-cover object-top border-2 border-black/10"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">A/B Testing &amp; Cohort Retention Insights</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Visualized experiment performance and cohort progression over time. Compared control vs treatment variants to identify winning strategies, retention stability, and long-term engagement trends—helping product teams prioritize high-ROI interventions.
                  </p>
                </div>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative">
                  <img 
                    src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/d4e3d21eacd71739c7c808fb2999c262.png"
                    alt="Executive Insights"
                    className="w-full h-64 md:h-96 object-cover object-top border-2 border-black/10"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Business Insights &amp; Revenue Impact</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Translated raw analytics into clear business insights. Identified feature adoption as the primary growth lever and quantified revenue impact from tested experiments, enabling confident rollout decisions backed by data, not intuition.
                  </p>
                </div>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative">
                  <img 
                    src="https://static.readdy.ai/image/162de1f448c1631ca23ab745508fcce7/69d109362c9898903d1cb8453ab99a1f.png"
                    alt="Final Report"
                    className="w-full h-64 md:h-96 object-cover object-top border-2 border-black/10"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">End-to-End Analytics &amp; Impact Summary</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Delivered a complete EDA and insights report combining funnel health, experiment results, cohort stability, and revenue projections. The analysis uncovered a validated $570K+ annual revenue opportunity through targeted PLG improvements.
                  </p>
                </div>
              </div>
            </ScrollAnimatedElement>
          </div>

          <WigglyLine />

          <ScrollAnimatedElement animation="fade">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 md:p-12 border-2 border-green-200 mt-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-green-900">Business Impact</h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start">
                  <span className="text-xl md:text-2xl mr-3 md:mr-4 flex-shrink-0">✅</span>
                  <p className="text-base md:text-lg text-gray-800">Identified the true mid-funnel bottleneck (feature adoption, not acquisition)</p>
                </div>
                <div className="flex items-start">
                  <span className="text-xl md:text-2xl mr-3 md:mr-4 flex-shrink-0">✅</span>
                  <p className="text-base md:text-lg text-gray-800">Validated multiple A/B experiments with statistically significant lift</p>
                </div>
                <div className="flex items-start">
                  <span className="text-xl md:text-2xl mr-3 md:mr-4 flex-shrink-0">✅</span>
                  <p className="text-base md:text-lg text-gray-800">Uncovered $570K+ potential ARR upside</p>
                </div>
                <div className="flex items-start">
                  <span className="text-xl md:text-2xl mr-3 md:mr-4 flex-shrink-0">✅</span>
                  <p className="text-base md:text-lg text-gray-800">Enabled data-driven product and growth decisions</p>
                </div>
                <div className="flex items-start md:col-span-2">
                  <span className="text-xl md:text-2xl mr-3 md:mr-4 flex-shrink-0">✅</span>
                  <p className="text-base md:text-lg text-gray-800">Delivered a production-grade, end-to-end analytics solution</p>
                </div>
              </div>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>

      <WigglyLine />

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
              What I Do
            </h2>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={200}>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              I deliver end-to-end analytics solutions — from data modeling and SQL analysis to dashboards and insights.
            </p>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[ 
              {
                icon: "🎨",
                title: "Creative Direction",
                description: "I help businesses define what questions matter most, structuring data and analysis around clear goals, metrics, and decision outcomes."
              },
              {
                icon: "✏️",
                title: "Illustration",
                description: "I transform complex datasets into simple, easy-to-understand insights using SQL analysis, clear logic, and meaningful storytelling."
              },
              {
                icon: "💻",
                title: "Digital Design",
                description: "I design clean, interactive dashboards and reports that make data intuitive, actionable, and accessible for everyday business use."
              }
            ].map((service, index) => (
              <ScrollAnimatedElement key={index} animation="fade" delay={index * 200}>
                <div className="text-center p-8 border-2 border-black/10 hover:border-black/30 transition-all duration-300 group cursor-pointer">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </ScrollAnimatedElement>
            ))}
          </div>

          <ScrollAnimatedElement animation="fade" delay={600}>
            <div className="bg-gradient-to-r from-gray-50 to-white p-12 border-2 border-black/10 text-center">
              <h3 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Every great project begins with curiosity. Let's explore what we can create together.
              </p>
              <div className="flex justify-center">
                <InteractiveButton onClick={() => handleScrollToSection('contact-form')}>
                  kaushikyeddanapudi075@gmail.com
                </InteractiveButton>
              </div>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>

      <WigglyLine />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-t from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimatedElement animation="wiggle">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Analytics Services
            </h2>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={400}>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed">
              Ready to turn raw data into actionable insights that drive smarter decisions?
            </p>
          </ScrollAnimatedElement>

          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            <ScrollAnimatedElement animation="fade" delay={200}>
              <div className="bg-white p-8 border-2 border-black/10 hover:border-black/30 transition-all duration-300 text-left h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6">Power BI Dashboard Development</h3>
                <div className="mb-6 flex-grow">
                  <p className="font-semibold mb-3">What's Included:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 1 dimensional database design (MySQL schema)</li>
                    <li>• 8–12 interactive dashboards</li>
                    <li>• 20+ KPI calculations (DAX formulas)</li>
                    <li>• Real-time refresh setup</li>
                    <li>• 2 weeks support</li>
                  </ul>
                </div>
                <InteractiveButton onClick={() => handleScrollToSection('contact-form')}>
                  Get Dashboard Built
                </InteractiveButton>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade" delay={300}>
              <div className="bg-white p-8 border-2 border-black/10 hover:border-black/30 transition-all duration-300 text-left h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6">MySQL Database Optimization</h3>
                <div className="mb-6 flex-grow">
                  <p className="font-semibold mb-3">What's Included:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Database audit & schema review</li>
                    <li>• 10+ query optimizations</li>
                    <li>• Index creation & performance testing</li>
                    <li>• SQL documentation + scripts</li>
                    <li>• 2 weeks support</li>
                  </ul>
                </div>
                <InteractiveButton onClick={() => handleScrollToSection('contact-form')}>
                  Optimize Database
                </InteractiveButton>
              </div>
            </ScrollAnimatedElement>

            <ScrollAnimatedElement animation="fade" delay={400}>
              <div className="bg-white p-8 border-2 border-black/10 hover:border-black/30 transition-all duration-300 text-left h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6">Excel Reporting & Automation</h3>
                <div className="mb-6 flex-grow">
                  <p className="font-semibold mb-3">What's Included:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Data model design</li>
                    <li>• 5+ automated reports</li>
                    <li>• VBA macros for one-click refresh</li>
                    <li>• User manual included</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <InteractiveButton onClick={() => handleScrollToSection('contact-form')}>
                  Build Reports
                </InteractiveButton>
              </div>
            </ScrollAnimatedElement>
          </div>

          <ScrollAnimatedElement animation="fade" delay={600}>
            <div className="bg-gradient-to-br from-black to-gray-800 text-white p-12 border-2 border-black max-w-6xl mx-auto mb-16">
              <div className="text-center mb-8">
                <span className="inline-block bg-white text-black px-4 py-1 text-sm font-bold mb-4">FEATURED SERVICE</span>
                <h3 className="text-4xl font-bold mb-3">Full-Stack Analytics System</h3>
                <p className="text-xl text-gray-300">Complete Data Infrastructure Built For Growth</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-2xl mr-2">✅</span> Tier 1: Database Architecture
                  </h4>
                  <ul className="space-y-2 text-gray-300 ml-8">
                    <li>• Dimensional database design (star schema)</li>
                    <li>• Optimized MySQL schema with indexing</li>
                    <li>• Query performance audit & optimization</li>
                    <li>• Scalable for 100K+ records</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-2xl mr-2">✅</span> Tier 2: Executive Dashboard
                  </h4>
                  <ul className="space-y-2 text-gray-300 ml-8">
                    <li>• Multiple interactive Power BI dashboards</li>
                    <li>• Real-time KPI monitoring</li>
                    <li>• Custom DAX calculations (revenue, growth, efficiency)</li>
                    <li>• Auto-refresh integration</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-2xl mr-2">✅</span> Tier 3: Automated Reporting
                  </h4>
                  <ul className="space-y-2 text-gray-300 ml-8">
                    <li>• 5+ automated Excel reports</li>
                    <li>• VBA-powered one-click refresh</li>
                    <li>• PDF export automation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-2xl mr-2">✅</span> Tier 4: Full Documentation
                  </h4>
                  <ul className="space-y-2 text-gray-300 ml-8">
                    <li>• Complete MySQL scripts & documentation</li>
                    <li>• Dashboard user guide (video walkthrough optional)</li>
                    <li>• Report maintenance manual</li>
                    <li>• Architecture diagram</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">✅</span> VIP Support:
                </h4>
                <ul className="space-y-2 text-gray-300 ml-8">
                  <li>• 30-day implementation support</li>
                  <li>• Unlimited tweaks during project</li>
                  <li>• 1 month follow-up support</li>
                </ul>
              </div>

              <div className="text-center">
                <InteractiveButton onClick={() => handleScrollToSection('contact-form')}>
                  Discuss Your Project
                </InteractiveButton>
              </div>
            </div>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={500}>
            <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-12 border-4 border-red-900 shadow-2xl max-w-6xl mx-auto mb-16">
              <div className="text-center mb-8">
                <span className="inline-block bg-white text-red-600 px-6 py-2 text-sm font-bold mb-4 uppercase tracking-wide">PREMIUM SERVICE</span>
                <h3 className="text-4xl font-bold mb-3">3-Month Data Partnership</h3>
                <p className="text-xl text-red-100">Ongoing Analytics Leadership Without The Full-Time Hire</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-2xl mr-2">✅</span> Ongoing Database Management
                  </h4>
                  <ul className="space-y-2 text-red-50 ml-8">
                    <li>• Weekly MySQL performance monitoring</li>
                    <li>• Query optimization & index tuning</li>
                    <li>• Data quality audits</li>
                    <li>• Schema improvements as needed</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-2xl mr-2">✅</span> Live Dashboard Updates
                  </h4>
                  <ul className="space-y-2 text-red-50 ml-8">
                    <li>• Weekly/bi-weekly dashboard refreshes</li>
                    <li>• New metrics added on demand</li>
                    <li>• Real-time KPI tracking</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-2xl mr-2">✅</span> Continuous Analysis & Insights
                  </h4>
                  <ul className="space-y-2 text-red-50 ml-8">
                    <li>• Weekly analysis reports</li>
                    <li>• Trend identification & alerts</li>
                    <li>• Ad-hoc analysis requests (5+ per week)</li>
                    <li>• Executive summaries</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-2xl mr-2">✅</span> Dedicated Support
                  </h4>
                  <ul className="space-y-2 text-red-50 ml-8">
                    <li>• WhatsApp for quick questions</li>
                    <li>• Direct access to you (no delays)</li>
                    <li>• Priority bug fixes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold mb-3">Ideal For:</h4>
                <p className="text-red-50 text-lg">
                  Scaling SaaS, e-commerce, or fintech teams who need hands-on analytics leadership without hiring a full-time analyst. Get expert-level insights every week.
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={() => handleScrollToSection('contact-form')}
                  className="bg-white text-red-600 px-8 py-4 text-lg font-bold hover:bg-red-50 transition-all duration-300 border-2 border-white hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  Start 3-Month Engagement
                </button>
              </div>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>

      <WigglyLine />

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimatedElement animation="fade">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready To Build Your Data Stack?
            </h2>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={200}>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Let's talk about your analytics needs. I'll suggest the best fit—whether it's a dashboard, database optimization, or full-stack solution.
            </p>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement animation="fade" delay={400}>
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-12 border-4 border-yellow-400 shadow-xl">
              <h3 className="text-3xl font-bold mb-4">Discuss Your Project</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Share a brief overview of your data, goals, and timelines — I'll get back to you with next steps.
              </p>
              
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="flex flex-col items-center gap-3 text-lg">
                  <span className="text-3xl">📧</span>
                  <span className="font-semibold text-xl">Email:</span>
                  <a 
                    href="mailto:kaushikyeddanapudi075@gmail.com" 
                    className="text-black hover:text-gray-600 transition-colors underline cursor-pointer text-xl font-bold"
                  >
                    kaushikyeddanapudi075@gmail.com
                  </a>
                </div>

                <div className="flex flex-col items-center gap-3 text-lg">
                  <span className="text-3xl">💼</span>
                  <span className="font-semibold text-xl">LinkedIn:</span>
                  <a 
                    href="https://www.linkedin.com/in/kaushik-yeddanapudi-a7603a323/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 text-lg font-bold hover:bg-blue-700 transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">Kaushik Yeddanapudi</p>
          <p className="text-gray-600">© 2026 Kaushik Yeddanapudi. Built with data, not guesswork.</p>
        </div>
      </footer>
    </div>
  );
}
