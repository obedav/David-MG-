import React from 'react';
import { CheckCircle, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              From Sales Professional to Full-Stack Developer
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Combining business insight with technical expertise to create solutions that drive real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">My Journey</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Started as a sales representative, where I learned to understand client needs and translate business requirements into actionable solutions. This background gives me a unique perspective in web development.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Now I build applications and websites that solve real business problems, having delivered solutions across education, energy consulting, hospitality, and e-commerce industries.
                </p>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-green-800 font-medium">Currently expanding skills with AWS cloud technologies</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  What Sets Me Apart
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Business understanding from sales background</li>
                  <li>• Full-stack development expertise</li>
                  <li>• Proven track record with live client websites</li>
                  <li>• Industry diversity across multiple sectors</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                  Current Focus
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• AWS Solutions Architect certification</li>
                  <li>• Cloud-native application development</li>
                  <li>• Serverless architecture patterns</li>
                  <li>• Modern DevOps practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;