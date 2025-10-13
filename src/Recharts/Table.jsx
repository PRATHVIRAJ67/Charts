import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Badge,
  Select,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/Download";

// --- STYLED COMPONENTS ---
const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
    paddingTop: 0,
    paddingBottom: 0,
    marginRight: theme.spacing(2),
    minHeight: 48,
    "&.Mui-selected": {
      color: theme.palette.primary.main,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    "&.MuiTabs-indicator": { display: "none" },
  })
);

const TaskTabsContainer = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  minHeight: "auto",
  "& .MuiTabs-indicator": { display: "none" },
}));

const CustomTabPanel = ({ children, value, index, ...other }) => (
  <Box
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    {...other}
  >
    {value === index && children}
  </Box>
);

// --- TASK LIST DATA AND HELPERS ---
// --- TASK LIST DATA AND HELPERS ---
const initialTasks = [
  // Completed Tasks
  {
    id: "TSK-MF-779",
    type: "Workflow",
    targetDate: "Not Applicable",
    completedDate: "29-Aug-2025",
    createdDate: "29-Aug-2025",
    createdBy: "Aditya",
    status: "Completed",
    assignedOn: "29-Aug-2025",
  },
  {
    id: "TSK-MF-773",
    type: "Workflow",
    targetDate: "Not Applicable",
    completedDate: "29-Aug-2025",
    createdDate: "29-Aug-2025",
    createdBy: "Aditya",
    status: "Completed",
    assignedOn: "29-Aug-2025",
  },
  {
    id: "TSK-MF-769",
    type: "Workflow",
    targetDate: "Not Applicable",
    completedDate: "29-Aug-2025",
    createdDate: "29-Aug-2025",
    createdBy: "Aditya",
    status: "Completed",
    assignedOn: "29-Aug-2025",
  },
  {
    id: "TSK-MF-780",
    type: "Workflow",
    targetDate: "30-Aug-2025",
    completedDate: "30-Aug-2025",
    createdDate: "30-Aug-2025",
    createdBy: "Aditya",
    status: "Completed",
    assignedOn: "30-Aug-2025",
  },
  {
    id: "TSK-MF-781",
    type: "Workflow",
    targetDate: "30-Aug-2025",
    completedDate: "30-Aug-2025",
    createdDate: "30-Aug-2025",
    createdBy: "Aditya",
    status: "Completed",
    assignedOn: "30-Aug-2025",
  },
  {
    id: "WNM-CAE2-0007.01",
    type: "Authoring Document",
    targetDate: "25-Aug-2025",
    completedDate: "25-Aug-2025",
    createdDate: "24-Aug-2025",
    createdBy: "Aditya",
    status: "Completed",
    assignedOn: "24-Aug-2025",
  },
  {
    id: "WNM-CAE2-0008.01",
    type: "Authoring Document",
    targetDate: "26-Aug-2025",
    completedDate: "26-Aug-2025",
    createdDate: "25-Aug-2025",
    createdBy: "Aditya",
    status: "Completed",
    assignedOn: "25-Aug-2025",
  },
  {
    id: "TSK-MF-784",
    type: "Workflow",
    targetDate: "31-Aug-2025",
    completedDate: "31-Aug-2025",
    createdDate: "30-Aug-2025",
    createdBy: "Aditya",
    status: "Completed",
    assignedOn: "30-Aug-2025",
  },

  // Pending / Accepted Tasks
  {
    id: "WNM-CAE2-0004.01",
    type: "Authoring Document",
    targetDate: "21-Aug-2025",
    completedDate: "-",
    createdDate: "21-Aug-2025",
    createdBy: "Aditya",
    status: "Accepted",
    assignedOn: "21-Aug-2025",
  },
  {
    id: "WNM-CAE2-0005.01",
    type: "Authoring Document",
    targetDate: "21-Aug-2025",
    completedDate: "-",
    createdDate: "21-Aug-2025",
    createdBy: "Aditya",
    status: "Accepted",
    assignedOn: "21-Aug-2025",
  },
  {
    id: "TSK-MF-782",
    type: "Workflow",
    targetDate: "05-Sep-2025",
    completedDate: "-",
    createdDate: "01-Sep-2025",
    createdBy: "Aditya",
    status: "Pending",
    assignedOn: "01-Sep-2025",
  },
  {
    id: "TSK-MF-783",
    type: "Workflow",
    targetDate: "06-Sep-2025",
    completedDate: "-",
    createdDate: "02-Sep-2025",
    createdBy: "Aditya",
    status: "Pending",
    assignedOn: "02-Sep-2025",
  },
  {
    id: "WNM-CAE2-0006.01",
    type: "Authoring Document",
    targetDate: "10-Sep-2025",
    completedDate: "-",
    createdDate: "03-Sep-2025",
    createdBy: "Aditya",
    status: "Pending",
    assignedOn: "03-Sep-2025",
  },
  {
    id: "TSK-MF-785",
    type: "Workflow",
    targetDate: "07-Sep-2025",
    completedDate: "-",
    createdDate: "04-Sep-2025",
    createdBy: "Aditya",
    status: "Pending",
    assignedOn: "04-Sep-2025",
  },
  {
    id: "TSK-MF-786",
    type: "Workflow",
    targetDate: "08-Sep-2025",
    completedDate: "-",
    createdDate: "05-Sep-2025",
    createdBy: "Aditya",
    status: "Pending",
    assignedOn: "05-Sep-2025",
  },
  {
    id: "WNM-CAE2-0009.01",
    type: "Authoring Document",
    targetDate: "12-Sep-2025",
    completedDate: "-",
    createdDate: "06-Sep-2025",
    createdBy: "Aditya",
    status: "Pending",
    assignedOn: "06-Sep-2025",
  },
  {
    id: "WNM-CAE2-0010.01",
    type: "Authoring Document",
    targetDate: "15-Sep-2025",
    completedDate: "-",
    createdDate: "07-Sep-2025",
    createdBy: "Aditya",
    status: "Pending",
    assignedOn: "07-Sep-2025",
  },
  {
    id: "TSK-MF-787",
    type: "Workflow",
    targetDate: "09-Sep-2025",
    completedDate: "-",
    createdDate: "08-Sep-2025",
    createdBy: "Aditya",
    status: "Pending",
    assignedOn: "08-Sep-2025",
  },
];


const getStatusStyle = (status) => {
  switch (status) {
    case "Completed":
      return { color: "#1e7e34", backgroundColor: "#d4edda", fontWeight: "bold" };
    case "Accepted":
      return { color: "#0056b3", backgroundColor: "#cce5ff", fontWeight: "bold" };
    case "Pending":
      return { color: "#856404", backgroundColor: "#fff3cd", fontWeight: "bold" };
    default:
      return {};
  }
};


const TaskTable = ({ tasks }) => (
  <Box component={Paper} sx={{ width: "100%", overflow: "hidden", mt: 2 }}>
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead style={{ backgroundColor: "#f8f8f8" }}>
        <tr>
          {[
            "Task ID",
            "Task Type",
            "Target Date",
            "Completed Date",
            "Created Date",
            "Created By",
            "Task Status",
          ].map((header) => (
            <th
              key={header}
              style={{
                padding: "12px 15px",
                textAlign: "left",
                fontWeight: "normal",
                color: "#333",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
            <td style={{ padding: "12px 15px" }}>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#007bff" }}
              >
                {task.id}
              </Typography>
              <Typography variant="caption" sx={{ color: "#999", fontSize: 10 }}>
                Assigned On {task.assignedOn}
              </Typography>
            </td>
            <td>{task.type}</td>
            <td>{task.targetDate}</td>
            <td>{task.completedDate}</td>
            <td>{task.createdDate}</td>
            <td>{task.createdBy}</td>
            <td>
              <Box
                component="span"
                sx={{
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: 12,
                  ...getStatusStyle(task.status),
                }}
              >
                {task.status}
              </Box>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Box>
);

const TaskTableFooter = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      py: 1,
      px: 2,
      fontSize: 13,
      color: "#6c757d",
      gap: 2,
      borderTop: "1px solid #f0f0f0",
    }}
  >
    <Typography variant="caption" color="text.secondary">
      Rows per page
    </Typography>
    <Select defaultValue={10} variant="outlined" size="small" sx={{ height: 30, fontSize: 13 }}>
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={25}>25</MenuItem>
      <MenuItem value={50}>50</MenuItem>
    </Select>
    <Typography variant="caption" sx={{ fontWeight: "bold" }}>
      1-5 of 236
    </Typography>
    <Button size="small" variant="outlined" sx={{ minWidth: 30, p: 0.5, fontSize: 14 }}>
      &lt;
    </Button>
    <Button size="small" variant="outlined" sx={{ minWidth: 30, p: 0.5, fontSize: 14 }}>
      &gt;
    </Button>
  </Box>
);


export default function SimpleTable() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
//   const dummyPendingCount = 799;

  const getTasksForTab = (tabIndex) => {
    if (tabIndex === 0) return initialTasks;
    if (tabIndex === 1) return initialTasks.filter((t) => t.status !== "Completed");
    if (tabIndex === 2) return initialTasks.filter((t) => t.status === "Completed");
    return [];
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "40px auto",
        p: 3,
        bgcolor: "white",
        borderRadius: 1,
        boxShadow: 3,
      }}
    >
      {/* Tabs Header */}
      <TaskTabsContainer value={value} onChange={handleChange}>
        <CustomTab label="All Task" />
        <CustomTab
          label="Pending Task"
        //   icon={
        //     <Badge badgeContent={dummyPendingCount} color="error" sx={{ ml: 0.5 }}>
        //       <span style={{ fontSize: 12, color: "white" }}></span>
        //     </Badge>
        //   }
          iconPosition="end"
        />
        <CustomTab label="Completed Task" />
      </TaskTabsContainer>

      {/* Content Panels */}
      <CustomTabPanel value={value} index={0} sx={{ p: 0 }}>
        <TaskTable tasks={getTasksForTab(0)} />
        <TaskTableFooter />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1} sx={{ p: 0 }}>
        <TaskTable tasks={getTasksForTab(1)} />
        <TaskTableFooter />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2} sx={{ p: 0 }}>
        <TaskTable tasks={getTasksForTab(2)} />
        <TaskTableFooter />
      </CustomTabPanel>
    </Box>
  );
}
