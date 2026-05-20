import {   useState } from "react"
import {
  Activity,
  AlertCircle,
  BarChart3,
 
  CheckCircle2,
  Clock3,
  CreditCard,
  DollarSign,
  Eye,
  FileText,
  Layers3,
  LayoutDashboard,
  Moon,
  Package,
  PieChartIcon,
  Plus,
  Printer,
  Search,
  Sun,
  TrendingUp,
 
  X,
  XCircle,
} from "lucide-react"

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

export default function PrintFlowProDashboard() {
  const [activeView, setActiveView] = useState("dashboard")
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null)
  const [showNewOrder, setShowNewOrder] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const workflowSteps = [
    "Requirement",
    "Survey",
    "Design",
    "Approval",
    "Printing",
    "Lamination",
    "Finishing",
    "Inspection",
    "Packing",
    "Delivery",
  ]

  const orders = [
    {
      id: "PF-1001",
      client: "Metro Mall",
      type: "Billboard",
      amount: 240000,
      advance: 120000,
      status: "Active",
      step: 7,
      deadline: "May 28",
      priority: "High",
      location: "Islamabad",
    },
    {
      id: "PF-1002",
      client: "Urban Cafe",
      type: "Menu Printing",
      amount: 42000,
      advance: 42000,
      status: "Completed",
      step: 10,
      deadline: "May 20",
      priority: "Low",
      location: "Lahore",
    },
    {
      id: "PF-1003",
      client: "Nova Events",
      type: "Backdrop",
      amount: 89000,
      advance: 35000,
      status: "Pending",
      step: 3,
      deadline: "June 2",
      priority: "Medium",
      location: "Karachi",
    },
    {
      id: "PF-1004",
      client: "Bright Pharma",
      type: "Packaging",
      amount: 315000,
      advance: 200000,
      status: "Active",
      step: 8,
      deadline: "May 30",
      priority: "High",
      location: "Rawalpindi",
    },
    {
      id: "PF-1005",
      client: "Tech Valley",
      type: "Standee",
      amount: 56000,
      advance: 28000,
      status: "Pending",
      step: 4,
      deadline: "May 27",
      priority: "Medium",
      location: "Islamabad",
    },
    {
      id: "PF-1006",
      client: "Media Hub",
      type: "Vehicle Wrap",
      amount: 176000,
      advance: 80000,
      status: "Active",
      step: 6,
      deadline: "June 1",
      priority: "High",
      location: "Lahore",
    },
    {
      id: "PF-1007",
      client: "Blue Mart",
      type: "Shelf Branding",
      amount: 91000,
      advance: 40000,
      status: "Canceled",
      step: 2,
      deadline: "May 24",
      priority: "Low",
      location: "Faisalabad",
    },
    {
      id: "PF-1008",
      client: "Royal Residency",
      type: "Outdoor Signage",
      amount: 470000,
      advance: 220000,
      status: "Active",
      step: 5,
      deadline: "June 5",
      priority: "High",
      location: "Peshawar",
    },
  ]

  const activeOrders = orders.filter((o) => o.status === "Active").length
  const pendingOrders = orders.filter((o) => o.status === "Pending").length
  const canceledOrders = orders.filter((o) => o.status === "Canceled").length
  const totalRevenue = orders.reduce((a, b) => a + b.amount, 0)

  const monthlyData = [
    { month: "Jan", orders: 18 },
    { month: "Feb", orders: 24 },
    { month: "Mar", orders: 31 },
    { month: "Apr", orders: 27 },
    { month: "May", orders: 39 },
    { month: "Jun", orders: 44 },
  ]

  const revenueData = [
    { name: "Billboards", value: 42 },
    { name: "Packaging", value: 28 },
    { name: "Signage", value: 18 },
    { name: "Print Media", value: 12 },
  ]

  const pipelineData = workflowSteps.map((step, index) => ({
    step,
    jobs: orders.filter((o) => o.step === index + 1).length,
  }))

  const theme = darkMode
    ? {
        bg: "bg-zinc-950",
        card: "bg-zinc-900 border-zinc-800",
        text: "text-white",
        sub: "text-zinc-400",
        hover: "hover:bg-zinc-800",
        sidebar: "bg-black border-zinc-800",
      }
    : {
        bg: "bg-zinc-100",
        card: "bg-white border-zinc-200",
        text: "text-zinc-900",
        sub: "text-zinc-500",
        hover: "hover:bg-zinc-100",
        sidebar: "bg-white border-zinc-200",
      }

  const statusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-500/15 text-emerald-500"
      case "Pending":
        return "bg-amber-500/15 text-amber-500"
      case "Completed":
        return "bg-blue-500/15 text-blue-500"
      case "Canceled":
        return "bg-red-500/15 text-red-500"
      default:
        return ""
    }
  }

  const StatCard = ({
    title,
    value,
    icon,
    growth,
  }: {
    title: string
    value: any
    icon: any
    growth: string
  }) => (
    <div
      className={`rounded-3xl border p-5 ${theme.card} shadow-[0_0_40px_rgba(0,0,0,0.05)]`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm ${theme.sub}`}>{title}</p>
          <h2 className={`mt-2 text-3xl font-bold ${theme.text}`}>{value}</h2>
          <p className="mt-2 text-xs text-emerald-500">{growth}</p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-4 text-white">
          {icon}
        </div>
      </div>
    </div>
  )

  const SidebarButton = ({
    label,
    icon,
    value,
  }: {
    label: string
    icon: any
    value: string
  }) => (
    <button
      onClick={() => setActiveView(value)}
      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all ${
        activeView === value
          ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
          : `${theme.hover} ${theme.sub}`
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  )

  return (
    <div
      className={`min-h-screen w-full transition-all duration-300 ${theme.bg}`}
    >
      <div className="flex">
        {/* SIDEBAR */}

        <aside
          className={`sticky top-0 h-screen w-[280px] border-r p-6 ${theme.sidebar}`}
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 p-3 text-white">
              <Printer className="h-6 w-6" />
            </div>

            <div>
              <h1 className={`text-xl font-bold ${theme.text}`}>
                PrintFlow Pro
              </h1>
              <p className={`text-xs ${theme.sub}`}>
                Printing Workflow Suite
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <SidebarButton
              label="Dashboard"
              value="dashboard"
              icon={<LayoutDashboard className="h-5 w-5" />}
            />

            <SidebarButton
              label="Orders"
              value="orders"
              icon={<Package className="h-5 w-5" />}
            />

            <SidebarButton
              label="Billing"
              value="billing"
              icon={<CreditCard className="h-5 w-5" />}
            />

            <SidebarButton
              label="Reports"
              value="reports"
              icon={<BarChart3 className="h-5 w-5" />}
            />
          </div>

          <button
            onClick={() => setShowNewOrder(true)}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-4 font-semibold text-white"
          >
            <Plus className="h-5 w-5" />
            New Order
          </button>

          <div className="mt-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 ${theme.card}`}
            >
              <span className={theme.text}>Theme</span>

              {darkMode ? (
                <Moon className="h-5 w-5 text-yellow-400" />
              ) : (
                <Sun className="h-5 w-5 text-orange-500" />
              )}
            </button>
          </div>
        </aside>

        {/* MAIN */}

        <main className="flex-1 p-8">
          {/* TOP BAR */}

          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className={`text-4xl font-bold ${theme.text}`}>
                Workflow Dashboard
              </h2>

              <p className={`mt-2 ${theme.sub}`}>
                Manage orders, production, billing, and delivery in one place.
              </p>
            </div>

            <div
              className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${theme.card}`}
            >
              <Search className={`h-5 w-5 ${theme.sub}`} />
              <input
                placeholder="Search orders..."
                className={`bg-transparent outline-none ${theme.text}`}
              />
            </div>
          </div>

          {/* DASHBOARD */}

          {activeView === "dashboard" && (
            <>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                <StatCard
                  title="Active Orders"
                  value={activeOrders}
                  growth="+18% this month"
                  icon={<Activity />}
                />

                <StatCard
                  title="Pending Orders"
                  value={pendingOrders}
                  growth="+8% this week"
                  icon={<Clock3 />}
                />

                <StatCard
                  title="Canceled Orders"
                  value={canceledOrders}
                  growth="-3% this month"
                  icon={<XCircle />}
                />

                <StatCard
                  title="Revenue"
                  value={`PKR ${totalRevenue.toLocaleString()}`}
                  growth="+24% growth"
                  icon={<DollarSign />}
                />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
                {/* MONTHLY CHART */}

                <div
                  className={`col-span-2 rounded-3xl border p-6 ${theme.card}`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className={`text-xl font-semibold ${theme.text}`}>
                        Monthly Orders
                      </h3>

                      <p className={`text-sm ${theme.sub}`}>
                        Orders processed this year
                      </p>
                    </div>

                    <TrendingUp className="text-emerald-500" />
                  </div>

                  <div className="h-[320px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData}>
                        <XAxis dataKey="month" stroke="currentColor" />
                        <YAxis stroke="currentColor" />
                        <Tooltip />
                        <Bar
                          dataKey="orders"
                          radius={[12, 12, 0, 0]}
                          fill="#6366f1"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* PIE */}

                <div className={`rounded-3xl border p-6 ${theme.card}`}>
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className={`text-xl font-semibold ${theme.text}`}>
                        Revenue Split
                      </h3>

                      <p className={`text-sm ${theme.sub}`}>
                        Revenue by order type
                      </p>
                    </div>

                    <PieChartIcon className="text-cyan-500" />
                  </div>

                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={revenueData}
                          dataKey="value"
                          outerRadius={100}
                        >
                          {revenueData.map((_, index) => (
                            <Cell
                              key={index}
                              fill={
                                ["#6366f1", "#06b6d4", "#8b5cf6", "#10b981"][
                                  index
                                ]
                              }
                            />
                          ))}
                        </Pie>

                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="space-y-3">
                    {revenueData.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between"
                      >
                        <span className={theme.sub}>{item.name}</span>

                        <span className={`font-semibold ${theme.text}`}>
                          {item.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ACTIVE JOBS */}

              <div className={`mt-6 rounded-3xl border p-6 ${theme.card}`}>
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className={`text-xl font-semibold ${theme.text}`}>
                      Active Production Jobs
                    </h3>

                    <p className={`text-sm ${theme.sub}`}>
                      Current workflow progress
                    </p>
                  </div>

                  <Layers3 className="text-indigo-500" />
                </div>

                <div className="space-y-4">
                  {orders
                    .filter((o) => o.status === "Active")
                    .map((order) => (
                      <div
                        key={order.id}
                        className={`rounded-2xl border p-4 ${theme.hover} ${theme.card}`}
                      >
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <h4 className={`font-semibold ${theme.text}`}>
                              {order.client}
                            </h4>

                            <p className={`text-sm ${theme.sub}`}>
                              {order.type}
                            </p>
                          </div>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </span>
                        </div>

                        <div className="flex gap-2">
                          {workflowSteps.map((_, index) => (
                            <div
                              key={index}
                              className={`h-3 flex-1 rounded-full ${
                                index < order.step
                                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500"
                                  : darkMode
                                  ? "bg-zinc-700"
                                  : "bg-zinc-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </>
          )}

          {/* ORDERS */}

          {activeView === "orders" && (
            <div className={`rounded-3xl border p-6 ${theme.card}`}>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className={`text-2xl font-semibold ${theme.text}`}>
                    Orders Management
                  </h3>

                  <p className={`text-sm ${theme.sub}`}>
                    Full workflow tracking and billing overview
                  </p>
                </div>
              </div>

              <div className="overflow-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`border-b ${darkMode ? "border-zinc-800" : "border-zinc-200"}`}>
                      {[
                        "Order ID",
                        "Client",
                        "Type",
                        "Progress",
                        "Amount",
                        "Balance",
                        "Deadline",
                        "Status",
                        "",
                      ].map((head) => (
                        <th
                          key={head}
                          className={`px-4 py-4 text-left text-sm font-medium ${theme.sub}`}
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order) => {
                      const balance = order.amount - order.advance

                      return (
                        <tr
                          key={order.id}
                          className={`cursor-pointer border-b transition-all ${theme.hover} ${
                            darkMode ? "border-zinc-800" : "border-zinc-200"
                          }`}
                          onClick={() => setSelectedOrder(order)}
                        >
                          <td className={`px-4 py-5 font-semibold ${theme.text}`}>
                            {order.id}
                          </td>

                          <td className={`px-4 py-5 ${theme.text}`}>
                            {order.client}
                          </td>

                          <td className={`px-4 py-5 ${theme.sub}`}>
                            {order.type}
                          </td>

                          <td className="px-4 py-5">
                            <div className="flex gap-1">
                              {workflowSteps.map((_, index) => (
                                <div
                                  key={index}
                                  className={`h-2 w-6 rounded-full ${
                                    index < order.step
                                      ? "bg-indigo-500"
                                      : darkMode
                                      ? "bg-zinc-700"
                                      : "bg-zinc-200"
                                  }`}
                                />
                              ))}
                            </div>
                          </td>

                          <td className={`px-4 py-5 font-semibold ${theme.text}`}>
                            PKR {order.amount.toLocaleString()}
                          </td>

                          <td
                            className={`px-4 py-5 font-semibold ${
                              balance > 0
                                ? "text-red-500"
                                : "text-emerald-500"
                            }`}
                          >
                            PKR {balance.toLocaleString()}
                          </td>

                          <td className={`px-4 py-5 ${theme.sub}`}>
                            {order.deadline}
                          </td>

                          <td className="px-4 py-5">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor(
                                order.status
                              )}`}
                            >
                              {order.status}
                            </span>
                          </td>

                          <td className="px-4 py-5">
                            <Eye className={`h-5 w-5 ${theme.sub}`} />
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* BILLING */}

          {activeView === "billing" && (
            <>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <StatCard
                  title="Quoted Revenue"
                  value={`PKR ${totalRevenue.toLocaleString()}`}
                  growth="+14%"
                  icon={<FileText />}
                />

                <StatCard
                  title="Received"
                  value={`PKR ${orders
                    .reduce((a, b) => a + b.advance, 0)
                    .toLocaleString()}`}
                  growth="+21%"
                  icon={<CheckCircle2 />}
                />

                <StatCard
                  title="Outstanding"
                  value={`PKR ${orders
                    .reduce((a, b) => a + (b.amount - b.advance), 0)
                    .toLocaleString()}`}
                  growth="Needs attention"
                  icon={<AlertCircle />}
                />
              </div>

              <div className={`mt-6 rounded-3xl border p-6 ${theme.card}`}>
                <table className="w-full">
                  <thead>
                    <tr className={`border-b ${darkMode ? "border-zinc-800" : "border-zinc-200"}`}>
                      {[
                        "Client",
                        "Quoted",
                        "Received",
                        "Outstanding",
                      ].map((head) => (
                        <th
                          key={head}
                          className={`px-4 py-4 text-left text-sm font-medium ${theme.sub}`}
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order) => (
                      <tr
                        key={order.id}
                        className={`border-b ${
                          darkMode ? "border-zinc-800" : "border-zinc-200"
                        }`}
                      >
                        <td className={`px-4 py-5 font-medium ${theme.text}`}>
                          {order.client}
                        </td>

                        <td className={`px-4 py-5 ${theme.text}`}>
                          PKR {order.amount.toLocaleString()}
                        </td>

                        <td className="px-4 py-5 text-emerald-500">
                          PKR {order.advance.toLocaleString()}
                        </td>

                        <td className="px-4 py-5 text-red-500">
                          PKR {(order.amount - order.advance).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* REPORTS */}

          {activeView === "reports" && (
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className={`rounded-3xl border p-6 ${theme.card}`}>
                <h3 className={`mb-5 text-xl font-semibold ${theme.text}`}>
                  Workflow Distribution
                </h3>

                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={pipelineData}>
                      <XAxis dataKey="step" stroke="currentColor" />
                      <YAxis stroke="currentColor" />
                      <Tooltip />
                      <Bar dataKey="jobs" fill="#06b6d4" radius={[10, 10, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className={`rounded-3xl border p-6 ${theme.card}`}>
                <h3 className={`mb-5 text-xl font-semibold ${theme.text}`}>
                  Revenue Breakdown
                </h3>

                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={revenueData}
                        dataKey="value"
                        outerRadius={120}
                      >
                        {revenueData.map((_, index) => (
                          <Cell
                            key={index}
                            fill={
                              ["#6366f1", "#06b6d4", "#8b5cf6", "#10b981"][
                                index
                              ]
                            }
                          />
                        ))}
                      </Pie>

                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* DETAIL PANEL */}

      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
          <div
            className={`h-full w-[520px] overflow-auto border-l p-6 ${theme.card}`}
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h2 className={`text-2xl font-bold ${theme.text}`}>
                  {selectedOrder.client}
                </h2>

                <p className={theme.sub}>{selectedOrder.id}</p>
              </div>

              <button onClick={() => setSelectedOrder(null)}>
                <X className={`h-6 w-6 ${theme.sub}`} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Total",
                  value: `PKR ${selectedOrder.amount.toLocaleString()}`,
                },
                {
                  label: "Advance",
                  value: `PKR ${selectedOrder.advance.toLocaleString()}`,
                },
                {
                  label: "Balance",
                  value: `PKR ${(
                    selectedOrder.amount - selectedOrder.advance
                  ).toLocaleString()}`,
                },
                {
                  label: "Deadline",
                  value: selectedOrder.deadline,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-2xl border p-4 ${theme.card}`}
                >
                  <p className={`text-sm ${theme.sub}`}>{item.label}</p>
                  <h4 className={`mt-2 text-lg font-semibold ${theme.text}`}>
                    {item.value}
                  </h4>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className={`mb-5 text-xl font-semibold ${theme.text}`}>
                Workflow Timeline
              </h3>

              <div className="space-y-4">
                {workflowSteps.map((step, index) => {
                  const completed = index < selectedOrder.step

                  return (
                    <div
                      key={step}
                      className={`flex items-start gap-4 rounded-2xl border p-4 ${theme.card}`}
                    >
                      <div
                        className={`mt-1 flex h-10 w-10 items-center justify-center rounded-full ${
                          completed
                            ? "bg-emerald-500 text-white"
                            : darkMode
                            ? "bg-zinc-800 text-zinc-400"
                            : "bg-zinc-200 text-zinc-600"
                        }`}
                      >
                        {completed ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          index + 1
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-semibold ${theme.text}`}>
                            {step}
                          </h4>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              completed
                                ? "bg-emerald-500/15 text-emerald-500"
                                : "bg-amber-500/15 text-amber-500"
                            }`}
                          >
                            {completed ? "Completed" : "Pending"}
                          </span>
                        </div>

                        <p className={`mt-2 text-sm ${theme.sub}`}>
                          Workflow stage {index + 1} of 10
                        </p>

                        {(step === "Survey" ||
                          step === "Design" ||
                          step === "Inspection") && (
                          <input
                            type="file"
                            className={`mt-4 w-full rounded-xl border px-4 py-3 text-sm ${
                              darkMode
                                ? "border-zinc-700 bg-zinc-800 text-zinc-300"
                                : "border-zinc-200 bg-zinc-50 text-zinc-700"
                            }`}
                          />
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NEW ORDER MODAL */}

      {showNewOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm">
          <div
            className={`w-full max-w-3xl rounded-[32px] border p-8 ${theme.card}`}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className={`text-3xl font-bold ${theme.text}`}>
                  Create New Order
                </h2>

                <p className={`mt-1 ${theme.sub}`}>
                  Capture client requirements and initiate workflow
                </p>
              </div>

              <button onClick={() => setShowNewOrder(false)}>
                <X className={`h-6 w-6 ${theme.sub}`} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                "Client Name",
                "Phone Number",
                "Order Type",
                "Priority",
                "Location",
                "Deadline",
              ].map((field) => (
                <div key={field}>
                  <label className={`mb-2 block text-sm ${theme.sub}`}>
                    {field}
                  </label>

                  <input
                    className={`w-full rounded-2xl border px-4 py-4 outline-none ${
                      darkMode
                        ? "border-zinc-700 bg-zinc-800 text-white"
                        : "border-zinc-200 bg-zinc-50 text-zinc-900"
                    }`}
                    placeholder={`Enter ${field}`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-5">
              <label className={`mb-2 block text-sm ${theme.sub}`}>
                Requirements
              </label>

              <textarea
                rows={5}
                placeholder="Enter project details..."
                className={`w-full rounded-2xl border px-4 py-4 outline-none ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-800 text-white"
                    : "border-zinc-200 bg-zinc-50 text-zinc-900"
                }`}
              />
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={() => setShowNewOrder(false)}
                className={`rounded-2xl border px-6 py-3 ${theme.text}`}
              >
                Cancel
              </button>

              <button className="rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-semibold text-white">
                Create Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}