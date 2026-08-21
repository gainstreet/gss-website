# Website Questionnaire — Final Question Set

For rebuilding Tom's "Website Building Form" in JotForm. Merges the old JotForm fields with the questions from the static site form, cleaned per Tom's notes.

**Legend:** `*` = required · `[cond]` = conditional · `→` = logic note

---

## Section 1 — About your business

1. **Your name** * — short text
2. **Business name** * — short text
3. **Email** * — email
4. **Phone** * — phone
5. **Service area** * — short text
   Helper: *"Cities, regions, or radius you serve."*
6. **Current website** — URL, optional
   Helper: *"Leave blank if you don't have one yet."*
7. **What kind of work do you do?** * — single choice
   → **This drives which service-page groups appear in Section 2.**
   - Roofing
   - Exterior / construction services (non-roofing)
   - Both roofing and other exterior services
   - Something else *(text field appears)*
8. **What makes your business different?** * — long text
   Helper: *"A few sentences. This shapes your homepage headline and About page."*

---

## Section 2 — Choose your pages

**Section intro copy (important):**

> Your $750 core launch includes five standard pages. Every additional standard page is $100.
>
> A standard page means one unique URL. Sections inside a page — a reviews block, a contact form, a service summary — don't count as separate pages.

9. **Common pages** * — checkboxes, **Home preselected**
   - Home *(preselected)*
   - About
   - Services overview
   - Contact
   - Projects / Gallery
   - Reviews / Testimonials
   - Our Team
   - Careers
   - Blog / Resources
   - FAQ
   - Financing
   - Warranties
   - Service Areas
   - Customer Downloads
   - Other *(text field appears)*

10. **[cond] Roofing service pages** — checkboxes, optional
    → Shows only if Q7 = Roofing **or** Both
    Helper: *"Each service you select here gets its own page and URL, and counts as one standard page. If you'd rather list a service as a section on your Services overview page, don't select it here."*
    - Commercial Roofing
    - Residential Roofing
    - Industrial Roofing
    - Roofing for Homeowners
    - Roofing for HOAs / Stratas
    - Roofing for Municipalities
    - Roofing for Property Managers
    - Roof Inspections
    - Drone Roof Inspections
    - Roof Repair Services
    - Roof Maintenance Plans
    - Other *(text field appears)*

11. **[cond] Other service pages** — checkboxes, optional
    → Shows only if Q7 = Exterior/construction **or** Both
    Same helper text as Q10.
    - Exterior Services
    - Residential Gutter Systems
    - Commercial Gutter Systems
    - Gutter Cleaning Services
    - Snow Removal Services
    - Residential Solar
    - Commercial Solar
    - Residential Windows
    - Commercial Windows
    - Foundation Waterproofing
    - Custom Metal Fabrication
    - Welding Services
    - Exterior Wall Systems
    - Liquid Coatings
    - Pressure Washing Services
    - Other *(text field appears)*

12. **Any other pages we haven't listed?** — long text, optional

### Running scope summary (display field, updates live)

```
Standard pages selected:        12
Core five (included):           $750
7 additional pages × $100:      $700
─────────────────────────────────────
One-time launch fee:          $1,450

Monthly management:         $349/mo
(billed separately, month-to-month)
```

Footnote under the summary: *"Prices in USD. Applicable taxes and separately quoted third-party costs are additional."*

---

## Section 3 — Forms & features

13. **Which forms do you want on your site?** — checkboxes
    - General contact / Get in touch — *included*
    - Request an estimate / Book a roof assessment — *included*
    - Report a leak / Emergency request — *included*
    - Employment application — *included*
    - Warranty claim — *included*
    - Detailed estimate form with photo upload — *Growth plan and above*
    - Something else *(text field appears)* — *needs review*

14. **Where should form leads go?** * — short text
    Helper: *"Email address, or several separated by commas."*

15. **Do you already use a CRM?** — single choice
    - No
    - Yes *(text field: "Which one?")*
    - Not sure

16. **Do you need anything beyond a standard page or form?** — checkboxes, optional
    Helper: *"Anything selected here is quoted separately after we review it — it isn't part of the launch fee above."*
    - Pricing or estimate calculator
    - Customer login / portal
    - Online store or payments
    - Booking / scheduling system
    - Integration with other software
    - Something else *(text field appears)*
    → If any box is ticked, show: **"Needs review — we'll quote this separately."**

---

## Section 4 — Style & brand

17. **Pick a style** * — image choice *(Tom's visual examples go here)*
    - Modern
    - Simple
    - Bold
    - Classic

18. **Websites you like** — long text, optional
    Helper: *"Paste links to any sites whose look or feel you'd want us to reference."*

19. **Do you have a logo and brand colors?** * — single choice
    - Yes, ready to send
    - Partially — logo but no defined colors
    - No, I need branding help

20. **Do you have photos of your own work we can use?** * — single choice
    - Yes, plenty
    - A few
    - No — we'll need stock photography

21. **Upload your brand assets** — file upload, optional
    Helper: *"Logo files, brand guide, job-site photos. You can also send these later."*

---

## Section 5 — Content

22. **Is your website copy ready?** * — single choice
    - Yes, it's written and ready
    - Some of it, but it needs polishing
    - No, I need help writing it

23. **Do you have Google reviews we can display?** — single choice
    - Yes *(text field: "Link to your Google Business profile")*
    - No / not yet

---

## Section 6 — Monthly plan

24. **Which management plan do you want?** * — single choice
    - **Foundation — $199/mo USD**
    - **Growth — $349/mo USD** *(most popular)*
    - **AI Front Desk — $499/mo USD, plus usage**
    - Not sure yet — help me choose

25. **[cond] AI Front Desk setup** — acknowledgment checkbox *
    → Shows only if Q24 = AI Front Desk
    *"I understand AI Front Desk includes a one-time $500 USD setup fee, added to my launch total."*

26. **[cond] What should the assistant be able to answer?** — long text
    → Shows only if Q24 = AI Front Desk
    Helper: *"Common questions, service areas, hours, what to do in an emergency. We'll confirm scope before setup."*

---

## Section 7 — Timing & submit

27. **When would you like to launch?** * — single choice
    - As soon as possible
    - Within a month
    - 2–3 months out
    - Just exploring for now

28. **Anything else we should know?** — long text, optional

29. **Consent** * — checkbox
    *"I agree to be contacted by Gain Street Strategy about this request."* + link to privacy policy

---

## Pricing logic to build into the calculation

| Item | Amount |
|---|---|
| Core launch (first 5 standard pages) | $750 one-time |
| Each additional standard page | $100 one-time |
| AI Front Desk setup *(if selected)* | $500 one-time |
| Foundation plan | $199/month |
| Growth plan | $349/month |
| AI Front Desk plan | $499/month + usage |
| Calculators, portals, e-commerce, integrations, custom forms | Needs review / quoted separately |

**Page count formula:** total boxes ticked across Q9 + Q10 + Q11 (+ any listed in Q12 once we review them).
**Launch fee formula:** `750 + (max(0, total_pages − 5) × 100) + (AI Front Desk selected ? 500 : 0)`

Keep one-time and monthly totals visually separate on the summary and in the confirmation email.

---

## Cleanup checklist (old JotForm)

- [ ] Remove duplicate **"Project Gallery"** (appears twice)
- [ ] Remove **"AI Chat Bot ($100 USD/Month)"** — conflicts with AI Front Desk pricing
- [ ] Remove **"Roof Maintenance Calculator ($100 USD/Month)"** — now handled under Q16 as quoted separately
- [ ] Remove **"Basic Website Hosting with WordPress"** — hosting is in every monthly plan
- [ ] Remove **"Additional Web Security Protection"** — same reason, or confirm with Tom if it's a real add-on
- [ ] Make roofing + other-services groups **optional and conditional** (currently both required)
- [ ] Rename the vague **"Special Features"** field — replaced by Q16
- [ ] Turn on the **progress bar**
- [ ] Set notification email + client confirmation email (include the scope/price summary)
- [ ] Enable spam protection
- [ ] Connect GoHighLevel under Settings → Integrations

---

## Three things to run by Tom

**1. How the "core five" gets picked.** Tom's note says *"Home preselected, then the client chooses the remaining pages"* for the core five — but his own example summary shows 12 pages selected freely. Forcing someone to designate which five are "core" adds a confusing step, since the price is the same either way. My recommendation: let them tick everything they want, and have the summary say *"first five included, 7 additional × $100."* Simpler, same total. Confirm Tom's happy with that.

**2. Which forms are actually free.** I've marked the five basic forms as included and the photo-upload estimate form as Growth-only, based on his notes. Worth confirming that's the real line — particularly whether a plain contact form is included on Foundation.

**3. "Additional Web Security Protection."** It's on the old form but not in the new plan structure. Delete it, or is it a genuine paid add-on?
