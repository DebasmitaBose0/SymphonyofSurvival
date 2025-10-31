# 🌍 Symphony of Survival  

[![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Google Earth Engine](https://img.shields.io/badge/Powered%20by-Google%20Earth%20Engine-34A853?logo=googleearth&logoColor=white)](https://earthengine.google.com/)
[![Open Source Love](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red)](https://github.com/DebasmitaBose0)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

> 🏆 **1st Repository under the Google Solutions Challenge**  
> 🌱 _Analyzing forest loss and gain in the Republic of the Congo using Google Earth Engine (JavaScript API)._

---

## 🧠 Overview  

**Symphony of Survival** is an environmental data analysis project designed to understand deforestation and reforestation patterns using **satellite-based geospatial datasets**.  

By leveraging the **Google Earth Engine JavaScript API**, this project visualizes **forest cover, loss, gain**, and computes **deforestation metrics** in both general and protected areas of the **Republic of the Congo**.  

This initiative contributes toward global sustainability goals by transforming remote sensing data into meaningful ecological insights. 🌏  

---

## 🌳 Features  

✨ **Interactive Visualization** – Forest cover (green), loss (red), gain (blue), combined gain/loss (magenta).  
📊 **Analytical Insights** – Computes total area of forest loss in Congo and within protected zones.  
🛰️ **Satellite Data Powered** – Uses verified open datasets from Google Earth Engine.  
💡 **Policy Support Tool** – Supports data-driven decision making for conservation and forest management.  
🪶 **Simple & Modular** – Clean, reusable JavaScript structure for easy modification.  

---

## 🗺️ Datasets Used  

| Dataset | Source | Description |
|----------|---------|-------------|
| 🌲 **UMD/Hansen Global Forest Change v1.5** | University of Maryland / Google | Annual tree cover, loss, and gain data from 2000 onward |
| 🧭 **USDOS/LSIB_SIMPLE/2017** | U.S. Department of State | Simplified international boundaries |
| 🏞️ **WCMC/WDPA/current/polygons** | UNEP-WCMC | World Database on Protected Areas polygons |

---

## 🧩 Tech Stack  

- **Language:** JavaScript  
- **Platform:** Google Earth Engine Code Editor  
- **Tools:** Earth Engine API, Remote Sensing datasets  
- **IDE:** Visual Studio Code  
- **Version Control:** Git & GitHub  

---

## 🚀 How It Works  

1. **Load and visualize** forest cover, loss, and gain layers from the Hansen dataset.  
2. **Filter** the region of interest — Republic of the Congo.  
3. **Intersect** with global protected area polygons (WDPA).  
4. **Compute** area of deforestation for the country and for protected areas.  
5. **Display** results in the Earth Engine Console and map viewer.  

---

## 🧮 Example Output  

```bash
Area lost in the Congo Republic: 123456789 square meters  
Area lost in protected areas: 98765432 square meters  
