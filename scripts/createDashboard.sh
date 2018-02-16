#!/usr/bin/env bash
echo "Creating $1..."
mkdir -p src/dashboards/$1; 
cp -R src/dashboards/DashboardBoilerplate/* src/dashboards/$1;
echo "Finished setup for $1!"