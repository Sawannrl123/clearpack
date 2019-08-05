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
    "Selected Period": ["Last one week", "Last one month", "Last one year"]
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
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          BPM: {
            Shift: {
              Event: {
                Ready: 70,
                Empty: 6,
                Blocked: 4,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 6,
                "E Stop": 7,
                "Filler max": 8,
                "Motor OL": 9,
                "Filler min": 10,
                "Saftey Door1": 11
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "95%",
                Performance: "78.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 133,
                  "20%": 165,
                  "30%": 200,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 133,
                  "80%": 200,
                  "90%": 200,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          OEE: {
            Shift: {
              Event: {
                Ready: 75,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 10,
                "Air low": 11,
                "E Stop": 12,
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
                  "Rejection full": 3,
                  "1 Servo error": 3,
                  "Motor Over": 3,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "89.6%",
                Availability: "87%",
                Performance: "98.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 137,
                  "10%": 162,
                  "20%": 165,
                  "30%": 137,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 162,
                  "80%": 137,
                  "90%": 137,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          }
        },
        "Last one month": {
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
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          BPM: {
            Shift: {
              Event: {
                Ready: 70,
                Empty: 6,
                Blocked: 4,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 6,
                "E Stop": 7,
                "Filler max": 8,
                "Motor OL": 9,
                "Filler min": 10,
                "Saftey Door1": 11
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "95%",
                Performance: "78.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 133,
                  "20%": 165,
                  "30%": 200,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 133,
                  "80%": 200,
                  "90%": 200,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          OEE: {
            Shift: {
              Event: {
                Ready: 75,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 10,
                "Air low": 11,
                "E Stop": 12,
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
                  "Rejection full": 3,
                  "1 Servo error": 3,
                  "Motor Over": 3,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "89.6%",
                Availability: "87%",
                Performance: "98.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 137,
                  "10%": 162,
                  "20%": 165,
                  "30%": 137,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 162,
                  "80%": 137,
                  "90%": 137,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          }
        },
        "Last one year": {
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
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          BPM: {
            Shift: {
              Event: {
                Ready: 70,
                Empty: 6,
                Blocked: 4,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 6,
                "E Stop": 7,
                "Filler max": 8,
                "Motor OL": 9,
                "Filler min": 10,
                "Saftey Door1": 11
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "95%",
                Performance: "78.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 133,
                  "20%": 165,
                  "30%": 200,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 133,
                  "80%": 200,
                  "90%": 200,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          OEE: {
            Shift: {
              Event: {
                Ready: 75,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 10,
                "Air low": 11,
                "E Stop": 12,
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
                  "Rejection full": 3,
                  "1 Servo error": 3,
                  "Motor Over": 3,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "89.6%",
                Availability: "87%",
                Performance: "98.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 137,
                  "10%": 162,
                  "20%": 165,
                  "30%": 137,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 162,
                  "80%": 137,
                  "90%": 137,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          }
        }
      }
    },
    "Day Shift": {
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
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          BPM: {
            Shift: {
              Event: {
                Ready: 70,
                Empty: 6,
                Blocked: 4,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 6,
                "E Stop": 7,
                "Filler max": 8,
                "Motor OL": 9,
                "Filler min": 10,
                "Saftey Door1": 11
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "95%",
                Performance: "78.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 133,
                  "20%": 165,
                  "30%": 200,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 133,
                  "80%": 200,
                  "90%": 200,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          OEE: {
            Shift: {
              Event: {
                Ready: 75,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 10,
                "Air low": 11,
                "E Stop": 12,
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
                  "Rejection full": 3,
                  "1 Servo error": 3,
                  "Motor Over": 3,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "89.6%",
                Availability: "87%",
                Performance: "98.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 137,
                  "10%": 162,
                  "20%": 165,
                  "30%": 137,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 162,
                  "80%": 137,
                  "90%": 137,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          }
        },
        "Last one month": {
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
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          BPM: {
            Shift: {
              Event: {
                Ready: 70,
                Empty: 6,
                Blocked: 4,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 6,
                "E Stop": 7,
                "Filler max": 8,
                "Motor OL": 9,
                "Filler min": 10,
                "Saftey Door1": 11
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "95%",
                Performance: "78.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 133,
                  "20%": 165,
                  "30%": 200,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 133,
                  "80%": 200,
                  "90%": 200,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          OEE: {
            Shift: {
              Event: {
                Ready: 75,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 10,
                "Air low": 11,
                "E Stop": 12,
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
                  "Rejection full": 3,
                  "1 Servo error": 3,
                  "Motor Over": 3,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "89.6%",
                Availability: "87%",
                Performance: "98.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 137,
                  "10%": 162,
                  "20%": 165,
                  "30%": 137,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 162,
                  "80%": 137,
                  "90%": 137,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          }
        },
        "Last one year": {
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
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          BPM: {
            Shift: {
              Event: {
                Ready: 70,
                Empty: 6,
                Blocked: 4,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 6,
                "E Stop": 7,
                "Filler max": 8,
                "Motor OL": 9,
                "Filler min": 10,
                "Saftey Door1": 11
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "95%",
                Performance: "78.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 133,
                  "20%": 165,
                  "30%": 200,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 133,
                  "80%": 200,
                  "90%": 200,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          OEE: {
            Shift: {
              Event: {
                Ready: 75,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 10,
                "Air low": 11,
                "E Stop": 12,
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
                  "Rejection full": 3,
                  "1 Servo error": 3,
                  "Motor Over": 3,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "89.6%",
                Availability: "87%",
                Performance: "98.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 137,
                  "10%": 162,
                  "20%": 165,
                  "30%": 137,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 162,
                  "80%": 137,
                  "90%": 137,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          }
        }
      }
    },
    "Night Shift": {
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
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          BPM: {
            Shift: {
              Event: {
                Ready: 70,
                Empty: 6,
                Blocked: 4,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 6,
                "E Stop": 7,
                "Filler max": 8,
                "Motor OL": 9,
                "Filler min": 10,
                "Saftey Door1": 11
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "95%",
                Performance: "78.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 133,
                  "20%": 165,
                  "30%": 200,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 133,
                  "80%": 200,
                  "90%": 200,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          OEE: {
            Shift: {
              Event: {
                Ready: 75,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 10,
                "Air low": 11,
                "E Stop": 12,
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
                  "Rejection full": 3,
                  "1 Servo error": 3,
                  "Motor Over": 3,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "89.6%",
                Availability: "87%",
                Performance: "98.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 137,
                  "10%": 162,
                  "20%": 165,
                  "30%": 137,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 162,
                  "80%": 137,
                  "90%": 137,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          }
        },
        "Last one month": {
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
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          BPM: {
            Shift: {
              Event: {
                Ready: 70,
                Empty: 6,
                Blocked: 4,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 6,
                "E Stop": 7,
                "Filler max": 8,
                "Motor OL": 9,
                "Filler min": 10,
                "Saftey Door1": 11
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "95%",
                Performance: "78.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 133,
                  "20%": 165,
                  "30%": 200,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 133,
                  "80%": 200,
                  "90%": 200,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          OEE: {
            Shift: {
              Event: {
                Ready: 75,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 10,
                "Air low": 11,
                "E Stop": 12,
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
                  "Rejection full": 3,
                  "1 Servo error": 3,
                  "Motor Over": 3,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "89.6%",
                Availability: "87%",
                Performance: "98.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 137,
                  "10%": 162,
                  "20%": 165,
                  "30%": 137,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 162,
                  "80%": 137,
                  "90%": 137,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          }
        },
        "Last one year": {
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
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          BPM: {
            Shift: {
              Event: {
                Ready: 70,
                Empty: 6,
                Blocked: 4,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 6,
                "E Stop": 7,
                "Filler max": 8,
                "Motor OL": 9,
                "Filler min": 10,
                "Saftey Door1": 11
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 7,
                  "1 Servo error": 7,
                  "Motor Over": 7,
                  Blocked: 7,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "95%",
                Performance: "78.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 133,
                  "20%": 165,
                  "30%": 200,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 133,
                  "80%": 200,
                  "90%": 200,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          },
          OEE: {
            Shift: {
              Event: {
                Ready: 75,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 10,
                "Air low": 11,
                "E Stop": 12,
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
                  "Rejection full": 3,
                  "1 Servo error": 3,
                  "Motor Over": 3,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "89.6%",
                Availability: "87%",
                Performance: "98.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 137,
                  "10%": 162,
                  "20%": 165,
                  "30%": 137,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 162,
                  "80%": 137,
                  "90%": 137,
                  "100%": 100
                }
              }
            },
            Day: {
              Event: {
                Ready: 60,
                Empty: 10,
                Blocked: 10,
                "Planned Downtime": 10,
                "Not Ready": 10
              },
              "Bar Chart": {
                "Screw lam": 15,
                "Air low": 10,
                "E Stop": 8,
                "Filler max": 6,
                "Motor OL": 1,
                "Filler min": 5,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 2,
                  "Air Low": 3,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 3,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 8,
                  "Air Low": 4,
                  "Label break": 4,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": null,
                  "Motor Over": null,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "80%",
                Availability: "90%",
                Performance: "99%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "OEE",
                data: {
                  "0%": 170,
                  "10%": 182,
                  "20%": 155,
                  "30%": 190,
                  "40%": 130,
                  "50%": 20,
                  "60%": 130,
                  "70%": 162,
                  "80%": 160,
                  "90%": 160,
                  "100%": 100
                }
              }
            },
            Week: {
              Event: {
                Ready: 50,
                Empty: 20,
                Blocked: 10,
                "Planned Downtime": 13,
                "Not Ready": 7
              },
              "Bar Chart": {
                "Screw lam": 20,
                "Air low": 10,
                "E Stop": 15,
                "Filler max": 18,
                "Motor OL": 5,
                "Filler min": 3,
                "Saftey Door1": 2
              },
              Labeller: {
                Stop: {
                  "E Stop": 5,
                  "Air Low": 3,
                  "Label break": 2,
                  "Infeed jam": 1,
                  "Rejection full": 1,
                  "1 Servo error": 1,
                  "Motor Over": 1,
                  Blocked: 1,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 5,
                  "1 Servo error": 5,
                  "Motor Over": 5,
                  Blocked: 5,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "50%",
                Availability: "80%",
                Performance: "95%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 200,
                  "10%": 162,
                  "20%": 158,
                  "30%": 170,
                  "40%": 150,
                  "50%": 60,
                  "60%": 180,
                  "70%": 140,
                  "80%": 130,
                  "90%": 180,
                  "100%": 105
                }
              }
            },
            Month: {
              Event: {
                Ready: 80,
                Empty: 5,
                Blocked: 5,
                "Planned Downtime": 5,
                "Not Ready": 5
              },
              "Bar Chart": {
                "Screw lam": 5,
                "Air low": 7,
                "E Stop": 10,
                "Filler max": 12,
                "Motor OL": 1,
                "Filler min": 7,
                "Saftey Door1": 4
              },
              Labeller: {
                Stop: {
                  "E Stop": 1,
                  "Air Low": 1,
                  "Label break": 1,
                  "Infeed jam": 1,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 2,
                  "Minor Stops": 2
                },
                "Total Min": {
                  "E Stop": 5,
                  "Air Low": 4,
                  "Label break": 3,
                  "Infeed jam": 2,
                  "Rejection full": 10,
                  "1 Servo error": 10,
                  "Motor Over": 10,
                  Blocked: 10,
                  "Major Stops": 20,
                  "Minor Stops": "05"
                }
              },
              percentage: {
                OEE: "40%",
                Availability: "90%",
                Performance: "80.2%",
                Quality: "99.9%"
              },
              "Line Chart": {
                label: "BPM",
                data: {
                  "0%": 175,
                  "10%": 152,
                  "20%": 165,
                  "30%": 175,
                  "40%": 170,
                  "50%": 40,
                  "60%": 170,
                  "70%": 152,
                  "80%": 175,
                  "90%": 175,
                  "100%": 100
                }
              }
            }
          }
        }
      }
    }
  }
};
