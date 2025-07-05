import React from 'react';
import { Cloud, Clock, Target, CheckCircle, Code } from 'lucide-react';

const AWSJourney = () => {
  return (
    <section id="aws-journey" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              AWS Learning Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Expanding into cloud technologies to build scalable, modern applications
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 border border-blue-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <Cloud className="w-8 h-8 mr-3 text-blue-600" />
                  Current Focus: AWS Solutions Architect
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="text-slate-700">Currently studying AWS fundamentals and architecture patterns</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700">Goal: AWS Solutions Architect Associate certification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Building practice projects with AWS services</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Learning Progress</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-slate-600">AWS Fundamentals</span>
                        <span className="text-sm text-slate-500">75%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-600 to-orange-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-slate-600">EC2 & VPC</span>
                        <span className="text-sm text-slate-500">60%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-600 to-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-slate-600">S3 & CloudFront</span>
                        <span className="text-sm text-slate-500">70%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-600 to-orange-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-blue-600" />
                    AWS Services Learning
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-sm font-medium text-blue-800">EC2</div>
                      <div className="text-xs text-blue-600">Compute</div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg text-center">
                      <div className="text-sm font-medium text-orange-800">S3</div>
                      <div className="text-xs text-orange-600">Storage</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg text-center">
                      <div className="text-sm font-medium text-green-800">Lambda</div>
                      <div className="text-xs text-green-600">Serverless</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg text-center">
                      <div className="text-sm font-medium text-purple-800">RDS</div>
                      <div className="text-xs text-purple-600">Database</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-orange-500" />
                    Upcoming Projects
                  </h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Deploy portfolio on AWS S3 + CloudFront</li>
                    <li>• Build serverless contact form with Lambda</li>
                    <li>• Create AWS-powered API backend</li>
                    <li>• Implement CI/CD pipeline</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
                <h4 className="font-bold text-slate-800 mb-3">Why AWS?</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Cloud computing is the future of web development. Learning AWS positions me to build scalable, 
                  cost-effective solutions that can grow with business needs. This knowledge will enhance both 
                  my personal projects and client work capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AWSJourney;