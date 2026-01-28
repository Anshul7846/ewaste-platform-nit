
import React, { useState } from 'react';
import { Recycle, Leaf, TrendingUp, Wrench, Package, DollarSign, Trophy, Upload, BarChart3, PieChart, Activity, Bell, Settings, Download, ArrowRight, CheckCircle, Clock, Truck, Camera, Send, Users, Factory, Home, LogOut, Menu, X, MapPin, Calendar, AlertCircle, TrendingDown } from 'lucide-react';
import { PieChart as RePieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const EWastePlatform = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentPortal, setCurrentPortal] = useState(null);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [formData, setFormData] = useState({
    deviceType: '',
    age: '',
    condition: '',
    damage: '',
    image: null
  });
  const [notifications, setNotifications] = useState(3);

  // User Dashboard Data
  const userTreatmentData = [
    { name: 'Repair', value: 40, color: '#10b981' },
    { name: 'Recycle', value: 45, color: '#3b82f6' },
    { name: 'Reduce', value: 15, color: '#f59e0b' }
  ];

  const monthlyImpact = [
    { month: 'Jan', co2: 12, metal: 2.1, items: 4 },
    { month: 'Feb', co2: 15, metal: 2.5, items: 6 },
    { month: 'Mar', co2: 18.6, metal: 2.8, items: 5 },
  ];

  const userSubmissions = [
    { id: 1, item: 'Old Laptop', category: 'Electronics', decision: 'Repair', status: 'Completed', date: '2026-01-15', color: 'bg-green-500' },
    { id: 2, item: 'Mobile Phone', category: 'Electronics', decision: 'Recycle', status: 'Collected', date: '2026-01-16', color: 'bg-green-500' },
    { id: 3, item: 'Charger', category: 'Accessories', decision: 'Reduce', status: 'Processing', date: '2026-01-17', color: 'bg-yellow-500' },
    { id: 4, item: 'Printer', category: 'Electronics', decision: 'Recycle', status: 'Awaiting Pickup', date: '2026-01-18', color: 'bg-blue-500' },
  ];

  // Hub Dashboard Data
  const hubQueueData = [
    { id: 1, user: 'Rahul Sharma', item: 'Laptop', submitted: '2026-01-18 09:30', status: 'Pending Classification', priority: 'high' },
    { id: 2, user: 'Priya Verma', item: 'TV', submitted: '2026-01-18 10:15', status: 'Pickup Scheduled', priority: 'medium' },
    { id: 3, user: 'Amit Kumar', item: 'Phone', submitted: '2026-01-18 11:00', status: 'Sent to Cluster', priority: 'low' },
    { id: 4, user: 'Sneha Patel', item: 'Tablet', submitted: '2026-01-18 11:30', status: 'Under Analysis', priority: 'high' },
  ];

  const hubDecisionStats = [
    { decision: 'Repair', count: 3400, percentage: 38, color: '#10b981' },
    { decision: 'Recycle', count: 4638, percentage: 52, color: '#3b82f6' },
    { decision: 'Reduce', count: 892, percentage: 10, color: '#f59e0b' },
  ];

  const hubMonthlyData = [
    { month: 'Oct', items: 720, users: 310 },
    { month: 'Nov', items: 890, users: 390 },
    { month: 'Dec', items: 940, users: 420 },
    { month: 'Jan', items: 920, users: 430 },
  ];

  // Cluster Dashboard Data
  const clusterMetalData = [
    { metal: 'Copper', weight: 124, value: 45000, color: '#f97316' },
    { metal: 'Aluminum', weight: 96, value: 28000, color: '#94a3b8' },
    { metal: 'Gold', weight: 0.018, value: 12000, color: '#fbbf24' },
    { metal: 'Silver', weight: 0.045, value: 3500, color: '#e5e7eb' },
    { metal: 'Steel', weight: 340, value: 15000, color: '#475569' },
  ];

  const clusterProcessingData = [
    { month: 'Oct', processed: 450, revenue: 95000 },
    { month: 'Nov', processed: 520, revenue: 110000 },
    { month: 'Dec', processed: 580, revenue: 125000 },
    { month: 'Jan', processed: 610, revenue: 135000 },
  ];

  const clusterInventory = [
    { category: 'Laptops', count: 45, status: 'Processing' },
    { category: 'Mobiles', count: 128, status: 'Dismantling' },
    { category: 'TVs', count: 23, status: 'Awaiting' },
    { category: 'Appliances', count: 67, status: 'Processing' },
  ];

  const NavBar = () => (
    <nav className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => { setActiveTab('home'); setCurrentPortal(null); }}>
            <Recycle className="h-8 w-8" />
            <span className="font-bold text-xl">EcoCircle</span>
          </div>
          {!currentPortal ? (
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'how-it-works'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab ? 'bg-white text-green-600' : 'hover:bg-green-700'
                  }`}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
              <div className="relative">
                <button className="px-4 py-2 bg-white text-green-600 rounded-md font-semibold hover:bg-green-50 transition-all">
                  Login / Portals
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  <button onClick={() => setCurrentPortal('user')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">User Portal</button>
                  <button onClick={() => setCurrentPortal('hub')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hub Portal</button>
                  <button onClick={() => setCurrentPortal('cluster')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cluster Portal</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">
                {currentPortal === 'user' ? '👤 User Portal' : currentPortal === 'hub' ? '🏢 Hub Portal' : '🏭 Cluster Portal'}
              </span>
              <button onClick={() => setCurrentPortal(null)} className="flex items-center space-x-2 px-4 py-2 bg-white text-green-600 rounded-md hover:bg-green-50 transition-all">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            ♻️ Smart E-Waste. Shared Value. Sustainable Future.
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Transform e-waste into economic opportunity and environmental impact through our smart Reduce–Repair–Recycle (3R) system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer" onClick={() => setCurrentPortal('user')}>
            <div className="flex items-center justify-between mb-4">
              <Users className="h-12 w-12 text-green-600" />
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">User Portal</h3>
            <p className="text-gray-600">Submit e-waste, track your impact, and earn rewards</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer" onClick={() => setCurrentPortal('hub')}>
            <div className="flex items-center justify-between mb-4">
              <Activity className="h-12 w-12 text-blue-600" />
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Hub Portal</h3>
            <p className="text-gray-600">Manage requests, make 3R decisions, coordinate logistics</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer" onClick={() => setCurrentPortal('cluster')}>
            <div className="flex items-center justify-between mb-4">
              <Factory className="h-12 w-12 text-purple-600" />
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Cluster Portal</h3>
            <p className="text-gray-600">Process e-waste, extract metals, manage revenue</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Leaf className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Why It Matters</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1" /> Prevents toxic landfill waste</li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1" /> Conserves critical metals and resources</li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1" /> Reduces carbon emissions</li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1" /> Generates income from waste</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-blue-600 p-8 rounded-xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
            <p className="mb-6">Join thousands of users making a difference. Click. Submit. Recover Value. Protect the Planet.</p>
            <button 
              onClick={() => setCurrentPortal('user')}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center space-x-2"
            >
              <span>Access User Portal</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        {/* Attribution */}
        <div className="mt-20 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Designed & Developed by <span className="font-medium text-gray-700">Ashish Garg and Mitrasen Yadav</span>
          </p>
        </div>

      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Building India's Digital Circular Economy for E-Waste</h1>
        
        <div className="prose prose-lg text-gray-700 space-y-6">
          <p className="text-lg">
            We are a technology-driven sustainability platform focused on solving the e-waste crisis through data, decentralization, and responsible resource recovery.
          </p>

          <div className="bg-green-50 p-6 rounded-xl my-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
              <Leaf className="mr-2" /> Our Vision
            </h2>
            <p className="text-green-900 text-lg">
              To create a future where e-waste is not waste, but a resource that drives sustainability, livelihoods, and innovation.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">🎯 Our Mission</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" />
              <span>Make e-waste disposal simple and accessible</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" />
              <span>Promote Reduce–Repair–Recycle decision-making</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" />
              <span>Enable transparent and ethical recycling</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" />
              <span>Empower users through value sharing and awareness</span>
            </li>
          </ul>
          {/* Our Team Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
              Our Team at NIT Hamirpur
            </h2>

            {/* Principal Investigator */}
            <div className="flex justify-center mb-12">
              <div className="border border-gray-200 rounded-xl p-8 text-center bg-white w-80">
                <img
                  src="/team/mamta-awasthi.jpeg"
                  alt="Dr. Mamta Awasthi"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  Dr. Mamta Awasthi
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Principal Investigator
                </p>
              </div>
            </div>

            {/* Project Associate */}
            <div className="flex justify-center mb-12">
              <div className="border border-gray-200 rounded-xl p-6 text-center bg-white w-72">
                <img
                  src="/team/prateek.jpg"
                  alt="Er. Prateek"
                  className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  Er. Prateek
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Project Associate
                </p>
              </div>
            </div>

            {/* Interns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="border border-gray-200 rounded-xl p-6 text-center bg-white">
                <img
                  src="/team/akarshak-bose.jpeg"
                  alt="Akarshak Bose"
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
                />
                <h3 className="text-base font-semibold text-gray-900">
                  Akarshak Bose
                </h3>
                <p className="text-sm text-gray-600">
                  Project Intern
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 text-center bg-white">
                <img
                  src="/team/ashish-garg.jpg"
                  alt="Ashish Garg"
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
                />
                <h3 className="text-base font-semibold text-gray-900">
                  Ashish Garg
                </h3>
                <p className="text-sm text-gray-600">
                  Technical Intern
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 text-center bg-white">
                <img
                  src="/team/mitrasen-yadav.jpeg"
                  alt="Mitrasen Yadav"
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
                />
                <h3 className="text-base font-semibold text-gray-900">
                  Mitrasen Yadav
                </h3>
                <p className="text-sm text-gray-600">
                  Technical Intern
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  const HowItWorksPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Step-by-Step Smart E-Waste Journey</h1>
        
        <div className="space-y-8">
          {[
            { step: 1, title: 'User Submission', icon: Upload, desc: 'Login, click a photo of your e-waste, fill a short questionnaire, and submit your request', color: 'blue' },
            { step: 2, title: 'Hub Analysis & Decision', icon: Activity, desc: 'Our AI analyzes the item and experts decide: Repair, Recycle, or Reduce based on condition', color: 'green' },
            { step: 3, title: 'Collection & Processing', icon: Truck, desc: 'Doorstep pickup scheduled. Items sent to repair centers or recycling clusters', color: 'purple' },
            { step: 4, title: 'Value Creation & Sharing', icon: DollarSign, desc: 'Metals extracted, valued, and revenue shared between users, hubs, and operations', color: 'yellow' }
          ].map((step) => (
            <div key={step.step} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-start space-x-6">
                <div className={`bg-${step.color}-100 p-4 rounded-full flex-shrink-0`}>
                  <step.icon className={`h-8 w-8 text-${step.color}-600`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Step {step.step}: {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SubmitEWasteForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Submit E-Waste Item</h2>
          <button onClick={() => setShowSubmitForm(false)} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors cursor-pointer">
              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Click to upload or drag and drop</p>
              <input type="file" className="hidden" accept="image/*" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Device Type</label>
            <select 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={formData.deviceType}
              onChange={(e) => setFormData({...formData, deviceType: e.target.value})}
            >
              <option value="">Select device type</option>
              <option value="laptop">Laptop</option>
              <option value="mobile">Mobile Phone</option>
              <option value="tablet">Tablet</option>
              <option value="tv">Television</option>
              <option value="printer">Printer</option>
              <option value="other">Other Electronics</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age of Device</label>
            <select 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
            >
              <option value="">Select age</option>
              <option value="0-1">Less than 1 year</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">More than 5 years</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Working Condition</label>
            <select 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={formData.condition}
              onChange={(e) => setFormData({...formData, condition: e.target.value})}
            >
              <option value="">Select condition</option>
              <option value="working">Fully Working</option>
              <option value="partial">Partially Working</option>
              <option value="not-working">Not Working</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Damage Level</label>
            <select 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={formData.damage}
              onChange={(e) => setFormData({...formData, damage: e.target.value})}
            >
              <option value="">Select damage level</option>
              <option value="none">No Damage</option>
              <option value="minor">Minor Damage</option>
              <option value="moderate">Moderate Damage</option>
              <option value="severe">Severe Damage</option>
            </select>
          </div>

          <button 
            onClick={() => {
              setShowSubmitForm(false);
              alert('E-waste submitted successfully! Our hub will analyze and contact you soon.');
            }}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
          >
            <Send className="h-5 w-5" />
            <span>Submit E-Waste</span>
          </button>
        </div>
      </div>
    </div>
  );

  const UserDashboard = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">👋 Welcome, Rajesh Kumar</h1>
            <p className="text-gray-600">Your contribution is creating environmental and economic value.</p>
          </div>
          <button 
            onClick={() => setShowSubmitForm(true)}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
          >
            <Upload className="h-5 w-5" />
            <span>Submit New E-Waste</span>
          </button>
        </div>

        {/* Quick Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'E-Waste Submitted', value: '5', icon: Package, color: 'blue', bg: 'bg-blue-50' },
            { label: 'Items Repaired', value: '2', icon: Wrench, color: 'green', bg: 'bg-green-50' },
            { label: 'Items Recycled', value: '3', icon: Recycle, color: 'purple', bg: 'bg-purple-50' },
            { label: 'CO₂ Avoided', value: '18.6 kg', icon: Leaf, color: 'emerald', bg: 'bg-emerald-50' },
            { label: 'Earnings', value: '₹1,250', icon: DollarSign, color: 'yellow', bg: 'bg-yellow-50' }
          ].map((card, idx) => (
            <div key={idx} className={`${card.bg} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1`}>
              <card.icon className={`h-8 w-8 text-${card.color}-600 mb-2`} />
              <div className={`text-3xl font-bold text-${card.color}-600 mb-1`}>{card.value}</div>
              <div className="text-sm text-gray-600">{card.label}</div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* 3R Distribution Pie Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <PieChart className="mr-2 text-blue-600" />
              Your Waste Treatment Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <RePieChart>
                <Pie
                  data={userTreatmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={800}
                >
                  {userTreatmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Impact Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="mr-2 text-green-600" />
              Monthly Environmental Impact
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyImpact}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="co2" fill="#10b981" name="CO₂ Saved (kg)" animationBegin={0} animationDuration={800} />
                <Bar dataKey="metal" fill="#3b82f6" name="Metal Recovered (kg)" animationBegin={0} animationDuration={800} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Submission Status Table */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">E-Waste Submission Status</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Decision</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {userSubmissions.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.item}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.decision}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`${item.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Impact & Earnings */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🌍 Environmental Impact</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="text-gray-700">Landfill Waste Avoided</span>
                <span className="font-bold text-green-600">12.4 kg</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="text-gray-700">Metals Recovered</span>
                <span className="font-bold text-blue-600">2.8 kg</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="text-gray-700">Energy Saved</span>
                <span className="font-bold text-purple-600">34 kWh</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="text-gray-700">Trees Equivalent Saved</span>
                <span className="font-bold text-emerald-600">≈ 6 Trees</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Earnings & Value Sharing</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="text-gray-700">Metal Recovery Share</span>
                <span className="font-bold text-yellow-600">₹980</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="text-gray-700">Repair Incentive</span>
                <span className="font-bold text-orange-600">₹270</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg border-2 border-green-700">
                <span className="text-lg font-bold">Total Earnings</span>
                <span className="text-2xl font-bold">₹1,250</span>
              </div>
              <p className="text-sm text-gray-600 text-center mt-2">🔐 Payments processed securely</p>
            </div>
          </div>
        </div>

        {/* Sustainability Score & Actions */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Trophy className="mr-2 text-yellow-500" />
              Sustainability Score
            </h3>
            <div className="flex items-center space-x-4">
              <div className="text-6xl">🌟🌟🌟🌟☆</div>
              <div>
                <div className="text-4xl font-bold text-yellow-600">4.5 / 5</div>
                <div className="text-gray-600 mt-2">🏆 Top 15% eco-responsible users</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Bell className="mr-2 text-blue-600" />
              Recent Notifications
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">Laptop repaired and delivered</p>
                  <p className="text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <Recycle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">Phone sent to recycling cluster</p>
                  <p className="text-gray-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <DollarSign className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">₹450 credited to your wallet</p>
                  <p className="text-gray-500">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const HubDashboard = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">🏢 Hub Management Dashboard</h1>
          <p className="text-gray-600">Central Intelligence & Decision Center</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Users', value: '2,430', icon: Users, color: 'blue', change: '+12%' },
            { label: 'Items Processed', value: '8,920', icon: Package, color: 'green', change: '+8%' },
            { label: 'Repair Rate', value: '38%', icon: Wrench, color: 'purple', change: '+3%' },
            { label: 'Revenue Generated', value: '₹18.6L', icon: DollarSign, color: 'yellow', change: '+15%' }
          ].map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-2">
                <card.icon className={`h-8 w-8 text-${card.color}-600`} />
                <span className="text-green-600 text-sm font-semibold">{card.change}</span>
              </div>
              <div className={`text-3xl font-bold text-${card.color}-600 mb-1`}>{card.value}</div>
              <div className="text-sm text-gray-600">{card.label}</div>
            </div>
          ))}
        </div>

        {/* Decision Stats & Monthly Trend */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* 3R Decision Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">3R Decision Distribution</h3>
            <div className="space-y-4">
              {hubDecisionStats.map((stat, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">{stat.decision}</span>
                    <span className="text-gray-600">{stat.count} items ({stat.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full transition-all duration-500"
                      style={{ width: `${stat.percentage}%`, backgroundColor: stat.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Processing Trend */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Processing Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={hubMonthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="items" stroke="#10b981" strokeWidth={2} name="Items Processed" animationBegin={0} animationDuration={800} />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} name="Active Users" animationBegin={0} animationDuration={800} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Live Queue Management */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Activity className="mr-2 text-blue-600" />
            Live Queue Management
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Submitted</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {hubQueueData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">#{item.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.user}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.item}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.submitted}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'Pending Classification' ? 'bg-yellow-100 text-yellow-800' :
                        item.status === 'Pickup Scheduled' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.priority === 'high' ? 'bg-red-100 text-red-800' :
                        item.priority === 'medium' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {item.priority.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-blue-600 hover:text-blue-800 font-semibold">Process</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4">
          <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all">
            <Activity className="h-5 w-5 mx-auto mb-2" />
            Analyze Pending
          </button>
          <button className="bg-white text-gray-700 px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all border-2 border-gray-200">
            <Truck className="h-5 w-5 mx-auto mb-2" />
            Schedule Pickup
          </button>
          <button className="bg-white text-gray-700 px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all border-2 border-gray-200">
            <BarChart3 className="h-5 w-5 mx-auto mb-2" />
            Generate Report
          </button>
          <button className="bg-white text-gray-700 px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all border-2 border-gray-200">
            <Settings className="h-5 w-5 mx-auto mb-2" />
            Settings
          </button>
        </div>
      </div>
    </div>
  );

  const ClusterDashboard = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">🏭 Cluster Processing Dashboard</h1>
          <p className="text-gray-600">Resource Extraction & Value Creation Center</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Items in Processing', value: '263', icon: Package, color: 'blue' },
            { label: 'Total Metal Extracted', value: '560.1 kg', icon: TrendingUp, color: 'green' },
            { label: 'This Month Revenue', value: '₹1.35L', icon: DollarSign, color: 'yellow' },
            { label: 'Processing Rate', value: '95%', icon: Activity, color: 'purple' }
          ].map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <card.icon className={`h-8 w-8 text-${card.color}-600 mb-2`} />
              <div className={`text-3xl font-bold text-${card.color}-600 mb-1`}>{card.value}</div>
              <div className="text-sm text-gray-600">{card.label}</div>
            </div>
          ))}
        </div>

        {/* Metal Extraction & Revenue Trend */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Metal Extraction Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Metal Extraction Summary</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={clusterMetalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metal" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="weight" name="Weight (kg)" animationBegin={0} animationDuration={800}>
                  {clusterMetalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Processing & Revenue Trend */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Processing & Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={clusterProcessingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="processed" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Items Processed" animationBegin={0} animationDuration={800} />
                <Area yAxisId="right" type="monotone" dataKey="revenue" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} name="Revenue (₹)" animationBegin={0} animationDuration={800} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Metal Value Breakdown */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Metal Recovery Value Breakdown</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {clusterMetalData.map((metal, idx) => (
              <div key={idx} className="p-4 rounded-lg" style={{ backgroundColor: `${metal.color}20` }}>
                <div className="text-2xl font-bold mb-1" style={{ color: metal.color }}>
                  {metal.weight} {metal.metal === 'Gold' || metal.metal === 'Silver' ? 'kg' : 'kg'}
                </div>
                <div className="text-sm text-gray-600 mb-2">{metal.metal}</div>
                <div className="text-lg font-bold" style={{ color: metal.color }}>₹{metal.value.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Inventory & Revenue Sharing */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Current Inventory */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Current Inventory Status</h3>
            <div className="space-y-4">
              {clusterInventory.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">{item.category}</div>
                    <div className="text-sm text-gray-600">{item.status}</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{item.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Sharing */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Revenue Distribution Model</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">User Share (35%)</span>
                  <span className="text-xl font-bold text-green-600">₹47,250</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Hub Share (15%)</span>
                  <span className="text-xl font-bold text-blue-600">₹20,250</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Operations (50%)</span>
                  <span className="text-xl font-bold text-purple-600">₹67,500</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total Revenue</span>
                  <span className="text-2xl font-bold">₹1,35,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-4 gap-4">
          <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all">
            <Package className="h-5 w-5 mx-auto mb-2" />
            Process Batch
          </button>
          <button className="bg-white text-gray-700 px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all border-2 border-gray-200">
            <TrendingUp className="h-5 w-5 mx-auto mb-2" />
            Metal Analysis
          </button>
          <button className="bg-white text-gray-700 px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all border-2 border-gray-200">
            <DollarSign className="h-5 w-5 mx-auto mb-2" />
            Revenue Report
          </button>
          <button className="bg-white text-gray-700 px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all border-2 border-gray-200">
            <Settings className="h-5 w-5 mx-auto mb-2" />
            Settings
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {showSubmitForm && <SubmitEWasteForm />}
      {!currentPortal && activeTab === 'home' && <HomePage />}
      {!currentPortal && activeTab === 'about' && <AboutPage />}
      {!currentPortal && activeTab === 'how-it-works' && <HowItWorksPage />}
      {currentPortal === 'user' && <UserDashboard />}
      {currentPortal === 'hub' && <HubDashboard />}
      {currentPortal === 'cluster' && <ClusterDashboard />}
    </div>
  );
};

export default EWastePlatform;