# Mood Tracking Journal

Daily journal app that helps users record and track their daily moods. With a simple and intuitive user interface, it allows users to create daily journal entries and record their emotional state using a range of emojis.

## Demo

TBA

## Tech Stack
<img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" width="20px" height="auto"/> React 18.2.0<br>
💅 Styled-components

## Getting Started

**Clone this repository**

```
git clone https://github.com/danimkim/mood-tracking-journal.git
```

**Navigate to the directory**

```
cd mood-tracking-journal
```

**Install dependencies**

```
npm install
```

**Run the project**

```
npm run start
```
<br>

## References

UI Design
<br>
https://www.behance.net/gallery/163277709/Emotional-Wellbeing-App-Case-Study/modules/920945597

<br>

## Implementation Notes

- [x] Render the list of the journals that are written in current month when the page first loads.
- [x] By default, the journal list is filtered by month.
- [ ] Add a fallback message if there is no data to display.
- [ ] Add a filter to sort the list by `created_date`.
- [ ] Add a filter to sort the list by `emotions`.
- [ ] Display the previous content in the form when in journal edit page.
- [ ] Use Firebase for Database.
