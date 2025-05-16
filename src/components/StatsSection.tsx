
import React from "react";
import { Clock, Calendar, Ban } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-12 bg-purple-900 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 p-4">
            <div className="rounded-full bg-white p-3">
              <Clock className="h-8 w-8 text-tyger-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">48 Hours</h3>
              <p className="text-sm mt-1">It all it takes to start the process towards a guaranteed rental payment</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4">
            <div className="rounded-full bg-white p-3">
              <Calendar className="h-8 w-8 text-tyger-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">3 Years</h3>
              <p className="text-sm mt-1">Fully managed, hassle-free service for as long as you need it</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4">
            <div className="rounded-full bg-white p-3">
              <Ban className="h-8 w-8 text-tyger-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">0 Fees</h3>
              <p className="text-sm mt-1">No management fees, no hidden costs, and no void periods</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
