import { FaUsers, FaDollarSign, FaShoppingBag } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FiPackage } from "react-icons/fi";
import { MdCategory } from "react-icons/md";
import { FaRegChartBar, FaListAlt, FaBox, FaTags, FaChartPie, FaSearch, FaCalendarAlt, FaCaretUp, FaCaretDown} from "react-icons/fa";
import { BsCalendarFill } from "react-icons/bs";
const orders = [
  { id: "#1235465", product: "DJI Mavic Pro 2", date: "Sep 16, 2021", amount: "$42.00", status: "Delivered" },
  { id: "#1235468", product: "iPad Pro 2017 Model", date: "Sep 15, 2021", amount: "$932.00", status: "Canceled" },
];
const categories = [
  { name: "Footwear", count: "18,941", color: "bg-yellow-100", icon: "👟" },
  { name: "Accessories", count: "26,061", color: "bg-green-100", icon: "👜" },
];
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#635BFF] flex justify-center py-10 px-4">
      <div className="flex w-full max-w-[1430px] rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Sidebar */}
        <aside className="bg-white w-64 flex flex-col py-8 px-6">
          <div className="mb-12 flex items-center gap-3">
            <div className="rounded-full h-10 w-10 bg-indigo-200 flex items-center justify-center font-bold text-indigo-700 text-lg">BP</div>
            <div>
              <p className="font-bold text-lg leading-tight">OZO</p>
              <p className="font-bold text-lg leading-tight">BRAND PROTECTOR</p>
              
            </div>
          </div>

         <nav className="flex flex-col gap-3 mb-auto text-gray-600 font-medium">
          <SidebarItem active icon={<FaRegChartBar />}>Summary</SidebarItem>
          <SidebarItem icon={<FaListAlt />}>Transaction</SidebarItem>
          <SidebarItem icon={<FaChartPie />}>Statistics</SidebarItem>
          <SidebarItem icon={<FaBox />}>Product</SidebarItem>
          <SidebarItem icon={<FaTags />}>Category</SidebarItem>
        </nav>

         <div className="flex flex-col items-center bg-indigo-50 p-3 mt-10 rounded-xl transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt=""
            className="h-16 w-16 rounded-full mb-3"
          />
          <p className="font-semibold text-gray-700">Sally Hawkins</p>
          <button className="mt-2 text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
            UPGRADE
          </button>
        </div>
        </aside>

        <main className="flex-1 bg-[#F8F9FD] p-12">
         <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Business Dashboard</h1>

          <div className="flex items-center gap-4 text-gray-600">
            <div className="p-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition">
              <FaSearch />
            </div>
            <div className="p-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition">
              <FaCalendarAlt />
            </div>
          </div>
        </div>

          <div className="flex gap-4 mb-6">
            <StatCard 
              icon={<FaUsers className="text-xl" />} 
              label="Customers" 
              value="54,235" 
              colorFrom="from-[#635BFF]" 
              colorTo="to-[#c7d4d3]"  
              small 
            />
            <StatCard 
              icon={<FaDollarSign className="text-xl" />} 
              label="Income" 
              value="$980,632" 
              colorFrom="from-[#635BFF]" 
              colorTo="to-[#c7d4d3]" 
              small 
            />
            <StatCard 
              icon={<FaShoppingBag className="text-xl" />} 
              label="Products Sold" 
              value="5,490" 
              colorFrom="from-[#635BFF]" 
              colorTo="to-[#c7d4d3]" 
              small 
            />
          </div>


          <div className="flex gap-6 mb-8">
            <div className="flex-1 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
                  <IoAnalyticsOutline className="text-blue-500" /> Data Analytics Overview
                </div>

                <div className="flex items-center justify-between mb-6">
                  <p className="text-gray-400 text-sm">
                    See how your account grow and how you can boost it.
                  </p>
                  <button className="border border-blue-300 rounded-full px-5 py-2 text-blue-500 font-semibold hover:bg-blue-100 transition">
                    START
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="font-semibold">Finance Flow</p>
                    <p className="text-2xl font-bold">$2,530</p>
                    <p className="text-xs text-gray-400">September 2021</p>
                  </div>

                  {/* Chart next to text */}
                  <div className="flex items-end space-x-1 h-20">
                    {[20, 50, 40, 70, 50, 80, 30, 60, 50, 30].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%`, width: "16px" }}
                        className="bg-blue-300 rounded-t"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
          </div>


          <div className="bg-white p-6 rounded-xl shadow w-56 flex flex-col items-center">
            <h5 className="font-semibold mb-4">UPGRADE TO PRO</h5>
            <div className="bg-red-100 p-3 rounded-full mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/869/869636.png"
                alt="bag"
                className="w-12 h-12"
              />
            </div>
            <p className="text-lg font-bold">$29 p/m</p>
            <p className="text-xs text-gray-400 text-center mt-2">100% insurance for your goods</p>
          </div>
        </div>

         
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex justify-between mb-4">
              <p className="font-semibold">Recent Orders</p>
              <button className="text-blue-500 text-sm">SEE ALL</button>
            </div>
            <table className="w-full text-sm">
              
              <tbody>
                {orders.map(o => (
                  <tr key={o.id} className="border-t">
                    <td className="py-2">{o.id}</td>
                    <td>{o.product}</td>
                    <td>{o.date}</td>
                    <td>{o.amount}</td>
                    <td className={o.status === "Delivered" ? "text-green-600" : "text-red-500"}>{o.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

      <aside className="w-80 lg:w-[420px] bg-white p-8 border-l">
          <h1 className="text-2xl font-bold mb-8">Summary</h1>
          <div className="bg-white p-4 rounded-lg shadow mb-6">
           <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">Your Balance</p>
            <span className="text-xs text-gray-400 font-bold" style={{ marginRight: "20px" }}>:</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold" style={{ marginTop: "20px" }}>$10,632.00</p>
            <span className="text-white text-xs font-bold bg-red-500 rounded-full w-5 h-5 flex items-center justify-center mr-5">
                +
              </span>          
            </div>
           <div className="flex gap-4 text-xs mt-1" style={{ marginTop: "20px" }}>
            <span className="flex items-center gap-1 text-gray-600 font-bold">
              <FaCaretUp /> $3,250.07
            </span>
            <span className="flex items-center gap-1 text-gray-600 font-bold">
              <FaCaretDown /> $1,062.90
            </span>
          </div>
          </div>

          <div className="flex justify-between mb-4 border-b border-gray-300 pb-2">
            <p className="font-semibold">Activity</p>
            <button className="text-blue-500 text-sm">SEE ALL</button>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            <Activity icon={<FaDollarSign className="text-white" />} desc="Withdraw Earning" time="12:40 am" amount="+$4,120" amountClass="text-gray-600" />
            <Activity icon={<MdCategory className="text-white" />} desc="Paying Website tax" time="10:20 am" amount="-$230" amountClass="text-gray-600" />
          </div>


          <h5 className="font-semibold mb-2">Top Categories</h5>
          <p>Explore your top categories and keep shopping with cashback</p>
          <div className="flex gap-3" style={{ marginTop: "20px" }}>
           {categories.map((c) => (
          <div key={c.name} className={`flex-1 p-4 ${c.color} rounded-xl text-center`}>
            <div className="text-2xl mb-2">{c.icon}</div>
            <div className="font-semibold">{c.name}</div>
            <div className="text-sm text-gray-500">{c.count} units</div>
          </div>
        ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

function SidebarItem({ active, icon, children }) {
  return (
    <div
      className={`flex items-center gap-3 py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200 
        ${active ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
    >
      <span className="text-lg">{icon}</span>
      {children}
    </div>
  );
}


function StatCard({ icon, label, value, colorFrom, colorTo }) {
  return (
    <div
      className={`flex justify-between items-center flex-1 p-3 rounded-xl text-white shadow bg-gradient-to-tr ${colorFrom} ${colorTo}`}
    >
      <div>
        <p className="text-xs font-medium">{label}</p>
        <p className="text-lg font-bold">{value}</p>
      </div>

      <div className="text-xl flex-shrink-0">{icon}</div>
    </div>
  );
}


function Activity({ icon, desc, time, amount, amountClass }) {
  return (
    <div className="flex items-center gap-3">
    <div className="bg-blue-600 p-2 rounded-lg text-white">
      {icon}
    </div>
      <div className="flex-1">
        <p className="text-gray-800">{desc}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
      <p className={`font-semibold ${amountClass}`}>{amount}</p>
    </div>
  );
}

function Category({ label, units, color, textColor }) {
  return (
    <div className={`flex-1 ${color} p-3 rounded-xl`}>
      <p className={`font-bold ${textColor}`}>{label}</p>
      <p className="text-lg">{units} units</p>
    </div>
  );
}
