import React from 'react';
import { CircuitBoard, Cpu, Zap } from 'lucide-react';
export function Header() {
  return <header className="w-full py-6 px-8 bg-gray-800 border-b border-blue-500/30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 text-blue-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Robotics & Electronics Club
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <CircuitBoard className="h-5 w-5 text-green-400" />
            <span>Innovation</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="h-5 w-5 text-purple-400" />
            <span>Technology</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-400" />
            <span>Future</span>
          </div>
        </div>
      </div>
    </header>;
}