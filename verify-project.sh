#!/bin/bash

# LearnHub Project Installation Verification Script
# This script verifies that all necessary files are in place

echo "🔍 LearnHub Project Verification..."
echo "=================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counters
TOTAL=0
PASSED=0

# Function to check file
check_file() {
    local file=$1
    local description=$2
    TOTAL=$((TOTAL + 1))
    
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $description"
        PASSED=$((PASSED + 1))
    else
        echo -e "${RED}✗${NC} $description - NOT FOUND: $file"
    fi
}

# Function to check directory
check_dir() {
    local dir=$1
    local description=$2
    TOTAL=$((TOTAL + 1))
    
    if [ -d "$dir" ]; then
        echo -e "${GREEN}✓${NC} $description"
        PASSED=$((PASSED + 1))
    else
        echo -e "${RED}✗${NC} $description - NOT FOUND: $dir"
    fi
}

echo "📁 Checking Project Structure..."
echo ""

# Root files
check_file "package.json" "package.json (Dependencies)"
check_file "vite.config.js" "vite.config.js (Build config)"
check_file "tailwind.config.js" "tailwind.config.js (Styling)"
check_file "postcss.config.js" "postcss.config.js (CSS)"
check_file "index.html" "index.html (HTML entry)"
check_file ".env.example" ".env.example (Environment template)"
check_file ".gitignore" ".gitignore"
check_file "mock-server.js" "mock-server.js (Mock API)"

echo ""
echo "📄 Checking Documentation..."
echo ""

check_file "README.md" "README.md"
check_file "SETUP_GUIDE.md" "SETUP_GUIDE.md"
check_file "DEV_GUIDE.md" "DEV_GUIDE.md"
check_file "API_DOCUMENTATION.md" "API_DOCUMENTATION.md"
check_file "PROJECT_SUMMARY.md" "PROJECT_SUMMARY.md"

echo ""
echo "📁 Checking Directories..."
echo ""

check_dir "src" "src/ (Source code)"
check_dir "src/components" "src/components/ (React components)"
check_dir "src/pages" "src/pages/ (Page layouts)"
check_dir "src/services" "src/services/ (API services)"

echo ""
echo "⚛️ Checking React Components..."
echo ""

check_file "src/App.jsx" "App.jsx (Main component)"
check_file "src/main.jsx" "main.jsx (Entry point)"
check_file "src/index.css" "index.css (Global styles)"
check_file "src/components/Header.jsx" "Header.jsx"
check_file "src/components/Footer.jsx" "Footer.jsx"
check_file "src/components/Hero.jsx" "Hero.jsx"
check_file "src/components/SignInForm.jsx" "SignInForm.jsx"
check_file "src/components/CourseCard.jsx" "CourseCard.jsx"
check_file "src/components/FeaturedCourses.jsx" "FeaturedCourses.jsx"

echo ""
echo "📦 Checking Services..."
echo ""

check_file "src/pages/SignInPage.jsx" "SignInPage.jsx"
check_file "src/services/authService.js" "authService.js (API Service)"

echo ""
echo "=================================="
echo -e "Results: ${GREEN}$PASSED/$TOTAL${NC} files verified"
echo "=================================="

if [ $PASSED -eq $TOTAL ]; then
    echo ""
    echo -e "${GREEN}✓ All files present! Project is ready.${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Run: npm install"
    echo "2. Run: npm run dev"
    echo "3. Open: http://localhost:5173"
    echo ""
    exit 0
else
    echo ""
    echo -e "${YELLOW}⚠ Some files are missing. Please check the errors above.${NC}"
    echo ""
    exit 1
fi
