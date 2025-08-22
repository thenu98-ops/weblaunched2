import React from 'react';
import { RocketIcon, Sparkles } from 'lucide-react';
import { RobotAnimation } from './RobotAnimation';
interface LaunchSectionProps {
  onLaunch: () => void;
  isLaunching: boolean;
}
export function LaunchSection({
  onLaunch,
  isLaunching
}: LaunchSectionProps) {
  return <div className="w-full max-w-4xl px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to the Future of Innovation
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Join us in exploring the exciting world of robotics, electronics, and
          cutting-edge technology. Our official website is just one click away.
        </p>
      </div>
      <div className="relative h-64 w-full flex items-center justify-center">
        {isLaunching ? <RobotAnimation /> : <div className="flex flex-col items-center">
            <button onClick={onLaunch} className="group relative px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-2xl font-bold shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 border-2 border-blue-400/30">
              <span className="flex items-center gap-3">
                <RocketIcon className="h-8 w-8" />
                Launch Now
              </span>
              <span className="absolute -top-2 -right-2">
                <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse" />
              </span>
              <span className="absolute -bottom-2 -left-2">
                <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity"></div>
            </button>
            <div className="mt-6 text-md text-gray-400">
              Click to enter our digital universe
            </div>
          </div>}
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-500/20">
          <h3 className="text-xl font-bold mb-2 text-blue-400">
            Innovation Hub
          </h3>
          <p className="text-gray-300">
            Explore groundbreaking projects and cutting-edge research in
            robotics.
          </p>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
          <h3 className="text-xl font-bold mb-2 text-purple-400">
            Learning Resources
          </h3>
          <p className="text-gray-300">
            Access tutorials, workshops, and educational materials for all skill
            levels.
          </p>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg border border-green-500/20">
          <h3 className="text-xl font-bold mb-2 text-green-400">Community</h3>
          <p className="text-gray-300">
            Connect with like-minded enthusiasts and industry professionals.
          </p>
        </div>
      </div>
    </div>;
}