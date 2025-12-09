import React, { useState } from 'react';
import { Calendar, Users, FileText, TrendingUp, Clock, Activity, Bell, Search, Menu, X, ChevronDown, Plus, Filter, Download, Eye, Edit, Trash2, MessageSquare, Phone, Video, Heart, Thermometer, Droplet, Weight, Pill, DollarSign, UserPlus, Settings, LogOut, BarChart3, PieChart, User, Mail, Lock, Briefcase, Award, Star, CheckCircle } from 'lucide-react';

// Mock Data
const mockStats = {
  totalPatients: 2845,
  todayAppointments: 38,
  totalRevenue: 54640,
  pendingReports: 12,
  surgeries: 156,
  satisfaction: 4.8
};

const mockAppointments = [
  { id: 1, patientName: 'Sarah Johnson', time: '09:00 AM', type: 'Checkup', status: 'confirmed', avatar: '👩', phone: '+91 98765 43210' },
  { id: 2, patientName: 'Mike Chen', time: '10:30 AM', type: 'Follow-up', status: 'pending', avatar: '👨', phone: '+91 98765 43211' },
  { id: 3, patientName: 'Emily Davis', time: '02:00 PM', type: 'Consultation', status: 'confirmed', avatar: '👩', phone: '+91 98765 43212' },
  { id: 4, patientName: 'John Smith', time: '03:30 PM', type: 'Emergency', status: 'urgent', avatar: '👨', phone: '+91 98765 43213' }
];

const mockPatients = [
  { id: 1, name: 'Sarah Johnson', age: 32, gender: 'Female', lastVisit: '2024-12-01', condition: 'Diabetes', status: 'active', bloodGroup: 'O+' },
  { id: 2, name: 'Mike Chen', age: 45, gender: 'Male', lastVisit: '2024-12-03', condition: 'Hypertension', status: 'active', bloodGroup: 'A+' },
  { id: 3, name: 'Emily Davis', age: 28, gender: 'Female', lastVisit: '2024-11-28', condition: 'Asthma', status: 'inactive', bloodGroup: 'B+' },
  { id: 4, name: 'John Smith', age: 56, gender: 'Male', lastVisit: '2024-12-05', condition: 'Cardiac Issue', status: 'active', bloodGroup: 'AB+' }
];

const mockMedicalRecords = [
  { id: 1, patientName: 'Sarah Johnson', date: '2024-12-01', type: 'Lab Report', diagnosis: 'Blood Sugar - Normal', doctor: 'Dr. Smith' },
  { id: 2, patientName: 'Mike Chen', date: '2024-12-03', type: 'Prescription', diagnosis: 'BP Medication', doctor: 'Dr. Smith' },
  { id: 3, patientName: 'Emily Davis', date: '2024-11-28', type: 'X-Ray', diagnosis: 'Chest X-Ray Clear', doctor: 'Dr. Smith' }
];

const mockPrescriptions = [
  { id: 1, patient: 'Sarah Johnson', medicine: 'Metformin', dosage: '500mg', frequency: 'Twice daily', duration: '30 days' },
  { id: 2, patient: 'Mike Chen', medicine: 'Amlodipine', dosage: '5mg', frequency: 'Once daily', duration: '60 days' },
  { id: 3, patient: 'Emily Davis', medicine: 'Salbutamol', dosage: '100mcg', frequency: 'As needed', duration: '90 days' }
];

const mockBilling = [
  { id: 1, patient: 'Sarah Johnson', date: '2024-12-01', amount: 2500, status: 'paid', service: 'Consultation' },
  { id: 2, patient: 'Mike Chen', date: '2024-12-03', amount: 3200, status: 'pending', service: 'Lab Tests' },
  { id: 3, patient: 'Emily Davis', date: '2024-11-28', amount: 1800, status: 'paid', service: 'X-Ray' }
];

const chartData = [
  { month: 'Jan', count: 65 }, { month: 'Feb', count: 78 }, { month: 'Mar', count: 90 },
  { month: 'Apr', count: 81 }, { month: 'May', count: 95 }, { month: 'Jun', count: 105 }
];

// Components
const Sidebar = ({ currentPage, setCurrentPage, isMobileOpen, setIsMobileOpen }) => {
  const menuItems = [
    { id: 'dashboard', icon: Activity, label: 'Dashboard' },
    { id: 'appointments', icon: Calendar, label: 'Appointments' },
    { id: 'patients', icon: Users, label: 'Patients' },
    { id: 'medical-records', icon: FileText, label: 'Medical Records' },
    { id: 'prescriptions', icon: Pill, label: 'Prescriptions' },
    { id: 'billing', icon: DollarSign, label: 'Billing' },
    { id: 'schedule', icon: Clock, label: 'Schedule' },
    { id: 'analytics', icon: TrendingUp, label: 'Analytics' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity ${isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileOpen(false)} />
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-72 sidebar-gradient text-white shadow-2xl transform transition-transform duration-300 lg:translate-x-0 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-emerald-500">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <Activity className="w-7 h-7 text-emerald-600" />
            </div>
            <div>
              <span className="text-2xl font-bold">MediCare</span>
              <p className="text-xs text-emerald-100">Pro Dashboard</p>
            </div>
          </div>
          <button onClick={() => setIsMobileOpen(false)} className="lg:hidden hover:bg-emerald-500 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-180px)]">
          {menuItems.map(item => (
            <button 
              key={item.id} 
              onClick={() => { setCurrentPage(item.id); setIsMobileOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                currentPage === item.id 
                  ? 'bg-white text-emerald-700 font-semibold shadow-lg transform scale-105' 
                  : 'text-emerald-50 hover:bg-emerald-500 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-emerald-500">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-emerald-50 hover:bg-red-500 hover:text-white transition-all">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

const Header = ({ setIsMobileOpen }) => (
  <header className="bg-white border-b shadow-sm px-6 py-4 sticky top-0 z-30 header-vibrant">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button onClick={() => setIsMobileOpen(true)} className="lg:hidden hover:bg-gray-100 p-2 rounded-lg transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search patients, appointments..." 
            className="pl-10 pr-4 py-2.5 w-96 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" 
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2.5 hover:bg-gray-100 rounded-xl transition-colors">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
        </button>
        <div className="flex items-center space-x-3 bg-gray-50 rounded-xl px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">DS</div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-gray-800">Dr. Smith</p>
            <p className="text-xs text-gray-500">Cardiologist</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </div>
      </div>
    </div>
  </header>
);

const StatCard = ({ icon: Icon, label, value, trend, trendUp, color, subtitle }) => {
  const colors = { 
    blue: 'from-blue-500 to-blue-600', 
    green: 'from-emerald-500 to-emerald-600', 
    purple: 'from-purple-500 to-purple-600', 
    orange: 'from-orange-500 to-orange-600',
    pink: 'from-pink-500 to-pink-600',
    indigo: 'from-indigo-500 to-indigo-600'
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-vibrant">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center stat-icon stat-icon-${color} shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${trendUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {trend}
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-1 font-medium">{label}</p>
      <p className="text-3xl font-bold text-gray-800 mb-1">{value}</p>
      {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
    </div>
  );
};

const SimpleBarChart = ({ data, dataKey, color }) => {
  const maxValue = Math.max(...data.map(d => d[dataKey]));
  return (
    <div className="flex items-end justify-between h-56 space-x-3">
      {data.map((item, index) => (
        <div key={index} className="flex-1 flex flex-col items-center group">
          <div className="w-full bg-gray-100 rounded-t-xl relative overflow-hidden" style={{ height: '100%' }}>
            <div 
              className="w-full rounded-t-xl absolute bottom-0 transition-all duration-500 group-hover:opacity-80" 
              style={{ 
                height: `${(item[dataKey] / maxValue) * 100}%`, 
                background: `linear-gradient(to top, ${color}, ${color}dd)` 
              }} 
            />
          </div>
          <span className="text-xs text-gray-600 mt-3 font-medium">{item.month}</span>
        </div>
      ))}
    </div>
  );
};

const AppointmentCard = ({ appointment }) => {
  const statusColors = { 
    confirmed: 'bg-green-100 text-green-700 border-green-200', 
    pending: 'bg-yellow-100 text-yellow-700 border-yellow-200', 
    urgent: 'bg-red-100 text-red-700 border-red-200' 
  };
  
  return (
    <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 bg-white hover:border-emerald-300">
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-2xl shadow-md">
          {appointment.avatar}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{appointment.patientName}</p>
          <p className="text-sm text-gray-500">{appointment.type}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-gray-700">{appointment.time}</p>
          <span className={`text-xs px-3 py-1 rounded-full border font-medium ${statusColors[appointment.status]}`}>
            {appointment.status}
          </span>
        </div>
        <div className="flex space-x-2">
          <button className="p-2.5 hover:bg-emerald-50 rounded-lg transition-colors text-emerald-600">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2.5 hover:bg-blue-50 rounded-lg transition-colors text-blue-600">
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Pages
const DashboardPage = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
      <h1 className="text-4xl font-bold mb-2">Welcome back, Dr. Smith! 👋</h1>
      <p className="text-emerald-100 text-lg">Here's what's happening with your practice today</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard icon={Users} label="Total Patients" value={mockStats.totalPatients.toLocaleString()} trend="+12.5%" trendUp={true} color="blue" subtitle="vs last month" />
      <StatCard icon={Calendar} label="Today's Appointments" value={mockStats.todayAppointments} trend="+5.2%" trendUp={true} color="green" subtitle="8 completed" />
      <StatCard icon={TrendingUp} label="Total Revenue" value={`₹${mockStats.totalRevenue.toLocaleString()}`} trend="+18.3%" trendUp={true} color="purple" subtitle="this month" />
      <StatCard icon={FileText} label="Pending Reports" value={mockStats.pendingReports} trend="-3.1%" trendUp={false} color="orange" subtitle="need review" />
      <StatCard icon={Award} label="Surgeries Done" value={mockStats.surgeries} trend="+8%" trendUp={true} color="pink" subtitle="lifetime" />
      <StatCard icon={Star} label="Satisfaction Rate" value={mockStats.satisfaction} trend="+0.3" trendUp={true} color="indigo" subtitle="out of 5.0" />
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold mb-6 text-gray-800">Appointments Trend</h3>
        <SimpleBarChart data={chartData} dataKey="count" color="#10b981" />
      </div>
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold mb-6 text-gray-800">Patient Distribution</h3>
        <div className="space-y-4">
          {[
            { label: 'Active Patients', count: 2456, perc: 86, color: 'bg-emerald-500' }, 
            { label: 'Inactive Patients', count: 389, perc: 14, color: 'bg-gray-400' }
          ].map(item => (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 font-medium">{item.label}</span>
                <span className="font-bold text-gray-800">{item.count.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className={`${item.color} h-3 rounded-full transition-all duration-500`} 
                  style={{ width: `${item.perc}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">Today's Appointments</h3>
        <button className="text-emerald-600 text-sm font-semibold hover:text-emerald-700 transition-colors">View All →</button>
      </div>
      <div className="space-y-4">
        {mockAppointments.map(apt => <AppointmentCard key={apt.id} appointment={apt} />)}
      </div>
    </div>
  </div>
);

const AppointmentsPage = () => {
  const [filter, setFilter] = useState('all');
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Appointments</h1>
          <p className="text-gray-500 mt-1">Manage and schedule appointments</p>
        </div>
        <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 btn-vibrant text-white px-6 py-3 rounded-xl flex items-center space-x-2 hover:shadow-lg transition-all hover:-translate-y-0.5">
          <Plus className="w-5 h-5" />
          <span className="font-semibold">New Appointment</span>
        </button>
      </div>
      
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {['all', 'confirmed', 'pending', 'urgent'].map(status => (
          <button 
            key={status} 
            onClick={() => setFilter(status)}
            className={`px-6 py-2.5 rounded-xl font-medium transition-all whitespace-nowrap ${
              filter === status 
                ? 'bg-emerald-600 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
              <tr>
                {['Patient', 'Time', 'Type', 'Status', 'Actions'].map(h => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockAppointments.map(apt => (
                <tr key={apt.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-11 h-11 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-xl shadow">
                        {apt.avatar}
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">{apt.patientName}</span>
                        <p className="text-xs text-gray-500">{apt.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-700">{apt.time}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">{apt.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${
                      apt.status === 'confirmed' ? 'bg-green-100 text-green-700 border-green-200' : 
                      apt.status === 'pending' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' : 
                      'bg-red-100 text-red-700 border-red-200'
                    }`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors text-blue-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-green-50 rounded-lg transition-colors text-green-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const PatientsPage = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Patients</h1>
        <p className="text-gray-500 mt-1">Manage patient records and information</p>
      </div>
      <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 btn-vibrant text-white px-6 py-3 rounded-xl flex items-center space-x-2 hover:shadow-lg transition-all hover:-translate-y-0.5">
        <UserPlus className="w-5 h-5" />
        <span className="font-semibold">Add Patient</span>
      </button>
    </div>
    
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <tr>
              {['Name', 'Age', 'Gender', 'Blood Group', 'Last Visit', 'Condition', 'Status', 'Actions'].map(h => (
                <th key={h} className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockPatients.map(p => (
              <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-gray-800">{p.name}</td>
                <td className="px-6 py-4 text-gray-700">{p.age}</td>
                <td className="px-6 py-4 text-gray-700">{p.gender}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-semibold">{p.bloodGroup}</span>
                </td>
                <td className="px-6 py-4 text-gray-700">{p.lastVisit}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">{p.condition}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                    p.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors text-blue-600">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-green-50 rounded-lg transition-colors text-green-600">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const MedicalRecordsPage = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Medical Records</h1>
        <p className="text-gray-500 mt-1">View and manage patient medical records</p>
      </div>
      <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 btn-vibrant text-white px-6 py-3 rounded-xl flex items-center space-x-2 hover:shadow-lg transition-all hover:-translate-y-0.5">
        <Plus className="w-5 h-5" />
        <span className="font-semibold">Add Record</span>
      </button>
    </div>
    
    <div className="grid gap-5">
      {mockMedicalRecords.map(r => (
        <div key={r.id} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all hover:border-emerald-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{r.type}</h3>
                  <span className="text-sm text-gray-500">{r.date}</span>
                </div>
              </div>
              <div className="space-y-2 ml-15">
                <p className="text-gray-700"><span className="font-semibold">Patient:</span> {r.patientName}</p>
                <p className="text-gray-700"><span className="font-semibold">Diagnosis:</span> {r.diagnosis}</p>
                <p className="text-gray-700"><span className="font-semibold">Doctor:</span> {r.doctor}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2.5 hover:bg-blue-50 rounded-lg transition-colors text-blue-600">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-2.5 hover:bg-green-50 rounded-lg transition-colors text-green-600">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const PrescriptionsPage = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Prescriptions</h1>
        <p className="text-gray-500 mt-1">Manage patient prescriptions and medications</p>
      </div>
      <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 btn-vibrant text-white px-6 py-3 rounded-xl flex items-center space-x-2 hover:shadow-lg transition-all hover:-translate-y-0.5">
        <Plus className="w-5 h-5" />
        <span className="font-semibold">New Prescription</span>
      </button>
    </div>
    
    <div className="grid gap-5">
      {mockPrescriptions.map(p => (
        <div key={p.id} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all hover:border-emerald-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                  <Pill className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{p.medicine}</h3>
                  <p className="text-sm text-gray-500">Patient: {p.patient}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-15">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Dosage</p>
                  <p className="font-semibold text-gray-800">{p.dosage}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Frequency</p>
                  <p className="font-semibold text-gray-800">{p.frequency}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Duration</p>
                  <p className="font-semibold text-gray-800">{p.duration}</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2.5 hover:bg-blue-50 rounded-lg transition-colors text-blue-600">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-2.5 hover:bg-green-50 rounded-lg transition-colors text-green-600">
                <Edit className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const BillingPage = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Billing & Payments</h1>
        <p className="text-gray-500 mt-1">Manage invoices and payment records</p>
      </div>
      <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl flex items-center space-x-2 hover:shadow-lg transition-all hover:-translate-y-0.5">
        <Plus className="w-5 h-5" />
        <span className="font-semibold">New Invoice</span>
      </button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
        <p className="text-green-100 mb-2">Total Collected</p>
        <p className="text-3xl font-bold">₹4,300</p>
        <p className="text-sm text-green-100 mt-2">This month</p>
      </div>
      <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 text-white shadow-lg">
        <p className="text-yellow-100 mb-2">Pending Amount</p>
        <p className="text-3xl font-bold">₹3,200</p>
        <p className="text-sm text-yellow-100 mt-2">To be collected</p>
      </div>
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
        <p className="text-blue-100 mb-2">Total Revenue</p>
        <p className="text-3xl font-bold">₹7,500</p>
        <p className="text-sm text-blue-100 mt-2">This month</p>
      </div>
    </div>
    
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <tr>
              {['Patient', 'Date', 'Service', 'Amount', 'Status', 'Actions'].map(h => (
                <th key={h} className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockBilling.map(b => (
              <tr key={b.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-gray-800">{b.patient}</td>
                <td className="px-6 py-4 text-gray-700">{b.date}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">{b.service}</span>
                </td>
                <td className="px-6 py-4 font-bold text-gray-800">₹{b.amount.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                    b.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {b.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors text-blue-600">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-green-50 rounded-lg transition-colors text-green-600">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const SchedulePage = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Weekly Schedule</h1>
        <p className="text-gray-500 mt-1">Manage your weekly appointment schedule</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-sm font-bold text-gray-600 uppercase">Time</th>
              {days.map(d => (
                <th key={d} className="px-4 py-3 text-center text-sm font-bold text-gray-600 uppercase">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((h, idx) => (
              <tr key={h} className="border-t border-gray-100">
                <td className="px-4 py-3 text-sm font-semibold text-gray-700">{h}</td>
                {days.map((d, dayIdx) => (
                  <td key={`${d}-${h}`} className="px-4 py-3">
                    {(idx === 2 && dayIdx === 1) || (idx === 4 && dayIdx === 3) || (idx === 6 && dayIdx === 0) ? (
                      <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 border-2 border-emerald-300 rounded-xl p-3 text-xs text-emerald-700 cursor-pointer hover:shadow-md transition-all">
                        <p className="font-bold">Patient Visit</p>
                        <p className="text-emerald-600">Checkup</p>
                      </div>
                    ) : (
                      <div className="h-16 border-2 border-dashed border-gray-200 rounded-xl hover:bg-gray-50 hover:border-emerald-300 cursor-pointer transition-all" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AnalyticsPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Analytics & Reports</h1>
      <p className="text-gray-500 mt-1">View detailed practice analytics and insights</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard icon={Users} label="Patient Growth" value="+245" trend="+23%" trendUp={true} color="blue" subtitle="new this month" />
      <StatCard icon={Calendar} label="Avg Appointments" value="32/day" trend="+8%" trendUp={true} color="green" subtitle="daily average" />
      <StatCard icon={TrendingUp} label="Revenue Growth" value="+₹125K" trend="+15%" trendUp={true} color="purple" subtitle="vs last month" />
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold mb-6 text-gray-800">Monthly Appointments</h3>
        <SimpleBarChart data={chartData} dataKey="count" color="#10b981" />
      </div>
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold mb-6 text-gray-800">Revenue Trend</h3>
        <SimpleBarChart data={chartData} dataKey="count" color="#8b5cf6" />
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Top Conditions</h3>
        <div className="space-y-3">
          {[
            { name: 'Diabetes', count: 156, color: 'bg-red-500' },
            { name: 'Hypertension', count: 134, color: 'bg-orange-500' },
            { name: 'Asthma', count: 98, color: 'bg-yellow-500' },
            { name: 'Cardiac Issues', count: 76, color: 'bg-purple-500' }
          ].map(item => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-gray-700 font-medium">{item.name}</span>
              </div>
              <span className="font-bold text-gray-800">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Appointment Types</h3>
        <div className="space-y-3">
          {[
            { name: 'Regular Checkup', perc: 45, color: 'bg-emerald-500' },
            { name: 'Follow-up', perc: 30, color: 'bg-blue-500' },
            { name: 'Emergency', perc: 15, color: 'bg-red-500' },
            { name: 'Consultation', perc: 10, color: 'bg-purple-500' }
          ].map(item => (
            <div key={item.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-700 font-medium">{item.name}</span>
                <span className="text-sm font-bold text-gray-800">{item.perc}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`${item.color} h-2.5 rounded-full transition-all duration-500`} style={{ width: `${item.perc}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const MessagesPage = () => {
  const conversations = [
    { id: 1, name: 'Sarah Johnson', message: 'Thank you for the consultation', time: '10m ago', unread: 2, avatar: '👩' },
    { id: 2, name: 'Mike Chen', message: 'When is my next appointment?', time: '1h ago', unread: 0, avatar: '👨' },
    { id: 3, name: 'Emily Davis', message: 'Question about prescription', time: '3h ago', unread: 1, avatar: '👩' },
    { id: 4, name: 'John Smith', message: 'Feeling much better now', time: '5h ago', unread: 0, avatar: '👨' }
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Messages</h1>
        <p className="text-gray-500 mt-1">Chat with your patients</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search conversations..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500" 
              />
            </div>
          </div>
          <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
            {conversations.map(c => (
              <div key={c.id} className="p-4 hover:bg-emerald-50 cursor-pointer transition-colors">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-xl shadow flex-shrink-0">
                    {c.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-semibold text-gray-800 truncate">{c.name}</p>
                      <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{c.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600 truncate">{c.message}</p>
                      {c.unread > 0 && (
                        <span className="ml-2 bg-emerald-600 text-white text-xs rounded-full px-2 py-0.5 font-semibold flex-shrink-0">
                          {c.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col">
          <div className="p-5 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-xl shadow">
                  👩
                </div>
                <div>
                  <p className="font-bold text-gray-800">Sarah Johnson</p>
                  <p className="text-sm text-emerald-600 font-medium">● Online</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2.5 hover:bg-emerald-50 rounded-lg transition-colors text-emerald-600">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-2.5 hover:bg-blue-50 rounded-lg transition-colors text-blue-600">
                  <Video className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-gray-50" style={{ minHeight: '400px' }}>
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-4 max-w-xs shadow-sm">
                <p className="text-sm text-gray-800">Thank you for the consultation!</p>
                <span className="text-xs text-gray-400 mt-2 block">10:30 AM</span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl rounded-tr-none p-4 max-w-xs shadow-md">
                <p className="text-sm">You're welcome! Take your medication as prescribed.</p>
                <span className="text-xs text-emerald-100 mt-2 block">10:32 AM</span>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-4 max-w-xs shadow-sm">
                <p className="text-sm text-gray-800">Will do. When should I come for follow-up?</p>
                <span className="text-xs text-gray-400 mt-2 block">10:35 AM</span>
              </div>
            </div>
          </div>
          
          <div className="p-5 border-t border-gray-200 bg-white">
            <div className="flex space-x-3">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500" 
              />
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 btn-vibrant text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all font-semibold">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your profile and application preferences</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Full name</label>
            <input className="w-full mt-2 px-4 py-2 border rounded-xl" defaultValue="Dr. Smith" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input className="w-full mt-2 px-4 py-2 border rounded-xl" defaultValue="dr.smith@example.com" />
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2 text-gray-800">Preferences</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-sm text-gray-700">Email notifications</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-sm text-gray-700">SMS reminders for appointments</span>
            </label>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-xl">Save Changes</button>
        </div>
      </div>
    </div>
  );
};
export default function App() {
  const [currentPage, setCurrentPage] = React.useState("dashboard");
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

 const pages = {
  dashboard: <DashboardPage />,
  appointments: <AppointmentsPage />,
  patients: <PatientsPage />,
    medicalRecords: <MedicalRecordsPage />,
    'medical-records': <MedicalRecordsPage />,
    prescriptions: <PrescriptionsPage />,
    billing: <BillingPage />,
    settings: <SettingsPage />,
  schedule: <SchedulePage />,
  analytics: <AnalyticsPage />,
  messages: <MessagesPage />,
};


  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="flex-1 flex flex-col">
        <Header setIsMobileOpen={setIsMobileOpen} />
        <main className="p-6">{pages[currentPage]}</main>
      </div>
    </div>
  );
}