from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "Yash-Kesharwani-Resume.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)

INK = colors.HexColor("#202938")
MUTED = colors.HexColor("#586477")
ACCENT = colors.HexColor("#477d0a")
RULE = colors.HexColor("#dce3d5")
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=21, leading=23, textColor=INK, alignment=TA_LEFT, spaceAfter=2))
styles.add(ParagraphStyle(name="Role", parent=styles["Normal"], fontName="Helvetica", fontSize=9, leading=12, textColor=ACCENT, spaceAfter=5))
styles.add(ParagraphStyle(name="Contact", parent=styles["Normal"], fontName="Helvetica", fontSize=7.6, leading=10, textColor=MUTED))
styles.add(ParagraphStyle(name="SectionHead", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=9.4, leading=11, textColor=ACCENT, spaceBefore=6, spaceAfter=2, keepWithNext=True))
styles.add(ParagraphStyle(name="BodySmall", parent=styles["BodyText"], fontName="Helvetica", fontSize=7.7, leading=9.6, textColor=INK, spaceAfter=1.5))
styles.add(ParagraphStyle(name="BodyCompact", parent=styles["BodyText"], fontName="Helvetica", fontSize=7.35, leading=9, textColor=INK, spaceAfter=1))
styles.add(ParagraphStyle(name="JobTitle", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=8.1, leading=9.7, textColor=INK, spaceBefore=1, spaceAfter=1))
styles.add(ParagraphStyle(name="JobDate", parent=styles["BodyText"], fontName="Helvetica-Oblique", fontSize=7.3, leading=9, textColor=MUTED, alignment=2))
styles.add(ParagraphStyle(name="Skill", parent=styles["BodyText"], fontName="Helvetica", fontSize=7.2, leading=8.6, textColor=INK))

def para(text, style="BodySmall"):
    return Paragraph(escape(text), styles[style])

def section(title):
    return [Paragraph(escape(title.upper()), styles["SectionHead"]), HRFlowable(width="100%", thickness=0.55, color=RULE, spaceBefore=0, spaceAfter=3)]

doc = SimpleDocTemplate(str(OUT), pagesize=A4, rightMargin=15*mm, leftMargin=15*mm, topMargin=11*mm, bottomMargin=10*mm, title="Yash Kesharwani - Resume", author="Yash Kesharwani")
story = [
    Paragraph("YASH KESHARWANI", styles["Name"]),
    Paragraph("Software Engineer | Java | Spring Boot | REST APIs | AWS", styles["Role"]),
]
contact_data = [[
    Paragraph("yashkesharwani559@gmail.com<br/>linkedin.com/in/yash-kesharwani-coder", styles["Contact"]),
    Paragraph("+91-7489967083<br/>Pune, India", styles["Contact"]),
]]
contact = Table(contact_data, colWidths=[112*mm, 64*mm])
contact.setStyle(TableStyle([
    ("VALIGN", (0,0), (-1,-1), "TOP"), ("ALIGN", (1,0), (1,0), "RIGHT"),
    ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 0),
    ("TOPPADDING", (0,0), (-1,-1), 0), ("BOTTOMPADDING", (0,0), (-1,-1), 2),
]))
story.extend([contact, HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceBefore=4, spaceAfter=4)])
story.extend(section("Technical Skills"))
for group, values in [
    ("Languages", "Java, Python, SQL, JavaScript"),
    ("Frameworks", "Spring Boot, Spring MVC, Spring Security, React.js, Tailwind CSS"),
    ("Databases", "MySQL, MongoDB"),
    ("Tools", "Git, GitHub, Maven, Gradle, Docker, Jenkins, Kafka, Redis, Kubernetes, Terraform, Ansible"),
    ("Cloud & DevOps", "AWS, Azure"),
    ("Concepts", "System Design, DSA, OOP, DBMS, REST APIs, SDLC, Microservices, CI/CD"),
]:
    story.append(Paragraph("<b>" + escape(group) + ":</b> " + escape(values), styles["Skill"]))
story.extend(section("Experience"))
def experience(title, date, points):
    table = Table([[Paragraph(escape(title), styles["JobTitle"]), Paragraph(escape(date), styles["JobDate"])]], colWidths=[117*mm, 59*mm])
    table.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"),("LEFTPADDING",(0,0),(-1,-1),0),("RIGHTPADDING",(0,0),(-1,-1),0),("TOPPADDING",(0,0),(-1,-1),0),("BOTTOMPADDING",(0,0),(-1,-1),0)]))
    story.append(table)
    for point in points:
        story.append(Paragraph("&#8226; " + escape(point), styles["BodyCompact"]))
    story.append(Spacer(1, 2))
experience("Cognizant - Software Engineer I", "Jul 2025 - Present", [
    "Automated Linux infrastructure patching using Azure DevOps, Ansible and Terraform.",
    "Collaborated with global teams to deliver reliable deployments and resolve production issues.",
    "Used Git-based workflows and CI/CD pipelines for controlled software delivery.",
    "Created automated pipelines to install MDPL Collector and its prerequisites on servers."
])
experience("Numetry Technologies - Software Developer Intern", "Feb 2025 - Jun 2025", [
    "Built Spring Boot REST APIs and React.js frontend applications.",
    "Integrated MongoDB Atlas, Firebase and Cloudinary.",
    "Worked in Agile development and version control using Git."
])
story.extend(section("Projects"))
story.append(Paragraph("<b>ShareBite - Real-Time Food Distribution Platform</b> <font color='#586477'>| Java, Spring Boot, Spring Security, React, MySQL, JPA, REST APIs, AWS EC2/RDS</font>", styles["BodyCompact"]))
story.append(Paragraph("Developed a full-stack application with secure authentication, REST APIs and a relational data layer; deployed using AWS EC2 and RDS.", styles["BodyCompact"]))
story.append(Paragraph("<b>Enhanced Heart Attack Prediction Model</b> <font color='#586477'>| Python, Scikit-learn, TensorFlow, Pandas, NumPy</font>", styles["BodyCompact"]))
story.append(Paragraph("Developed a machine-learning model reporting 92% accuracy, applying feature engineering, hyperparameter tuning and cross-validation.", styles["BodyCompact"]))
story.extend(section("Education"))
story.append(Paragraph("<b>Shri Ram Institute of Technology</b> - B.Tech, Computer Science &amp; Engineering | Sep 2021 - Jun 2025 | CGPA: 8.31", styles["BodyCompact"]))
story.append(Paragraph("<b>Model School of Excellence</b> - Class 12: 95.2% | Class 10: 93% | Apr 2019 - Apr 2021", styles["BodyCompact"]))
story.extend(section("Achievements"))
story.append(Paragraph("AWS Certified Developer - Associate (DVA-C02)  |  GATE 2025 Qualified (CSE)  |  700+ LeetCode problems solved  |  HackerRank Java Gold Badge  |  Wipro TalentNext Java Full Stack - 98%", styles["BodyCompact"]))
doc.build(story)
print("Generated resume at", OUT)
