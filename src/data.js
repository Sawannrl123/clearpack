export const getDateFromMillisecond = millisecond => {
  const parsedDate = new Date(millisecond);
  const date = parsedDate.getDate();
  const month = parsedDate.getMonth();
  const year = parsedDate.getFullYear();
  return `${plural(date)}.${plural(month + 1)}.${year}`;
};

export const getTimeFromMillisecond = millisecond => {
  const d = new Date(millisecond),
    h = d.getHours(),
    m = d.getMinutes();
  return `${plural(h)}:${plural(m)}`;
};

export const plural = num => {
  return (num + "").length === 1 ? `0${num}` : `${num}`;
};

export const Data = {
  setting: {
    Date: getDateFromMillisecond(new Date().getTime()),
    Time: getTimeFromMillisecond(new Date().getTime()),
    User: "Admin",
    "Analysis based on": ["Current Shift", "Day Shift", "Night Shift"],
    "Selected Period": ["Last one week", "Last one month", "Last one Year"]
  },
  data: {
    "Current Shift": {
      data: {
        "Last one week": {
          Alarms: {
            Shift: {
              Event: {
                Ready: 65,
                Empty: 7,
                Blocked: 5,
                "Planned Downtime": 13,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 10,
                "Air low": 9,
                "E Stop": 8,
                "Filler max": 8,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": null,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: null,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": null,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: null,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "85.6%",
                Availability: "97%",
                Performance: "88.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 160,
                  "10%": 162,
                  "20%": 165,
                  "30%": 160,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Day: {},
            Week: {},
            Month: {}
          },
          BPM: {
            Shift: {},
            Day: {},
            Week: {},
            Month: {}
          },
          OEE: {
            Shift: {},
            Day: {},
            Week: {},
            Month: {}
          }
        }
      }
    }
  }
};
