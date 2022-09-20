export const bylineWithNoRole = [
  {
    type: 'contributor',
    model: {
      blocks: [
        {
          type: 'name',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'Single Byline (all values)',
                        blocks: [
                          {
                            type: 'fragment',
                            model: {
                              text: 'Single Byline (all values)',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'link',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'test',
                        blocks: [
                          {
                            type: 'urlLink',
                            model: {
                              text: 'test',
                              locator: 'https://twitter.com/test',
                              blocks: [
                                {
                                  type: 'fragment',
                                  model: {
                                    text: 'test',
                                    attributes: [],
                                  },
                                },
                              ],
                              isExternal: true,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'location',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'London',
                        blocks: [
                          {
                            type: 'fragment',
                            model: {
                              text: 'London',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'image',
          model: {
            blocks: [
              {
                type: 'rawImage',
                model: {
                  width: 640,
                  height: 562,
                  locator: 'f2f8/test/49056060-fea9-11ec-8adf-7bf4017ee9f9.png',
                  originCode: 'cpsdevpb',
                },
              },
            ],
          },
        },
      ],
    },
  },
];

export const bylineWithNoAuthor = [
  {
    type: 'contributor',
    model: {
      blocks: [
        {
          type: 'role',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'Test',
                        blocks: [
                          {
                            type: 'fragment',
                            model: {
                              text: 'Test',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'link',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'test',
                        blocks: [
                          {
                            type: 'urlLink',
                            model: {
                              text: 'test',
                              locator: 'https://twitter.com/test',
                              blocks: [
                                {
                                  type: 'fragment',
                                  model: {
                                    text: 'test',
                                    attributes: [],
                                  },
                                },
                              ],
                              isExternal: true,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'location',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'London',
                        blocks: [
                          {
                            type: 'fragment',
                            model: {
                              text: 'London',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'image',
          model: {
            blocks: [
              {
                type: 'rawImage',
                model: {
                  width: 640,
                  height: 562,
                  locator: 'f2f8/test/49056060-fea9-11ec-8adf-7bf4017ee9f9.png',
                  originCode: 'cpsdevpb',
                },
              },
            ],
          },
        },
      ],
    },
  },
];

export const bylineWithNameAndRole = [
  {
    type: 'contributor',
    model: {
      blocks: [
        {
          type: 'name',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'Single Byline (all values)',
                        blocks: [
                          {
                            type: 'fragment',
                            model: {
                              text: 'Single Byline (all values)',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'role',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'Test',
                        blocks: [
                          {
                            type: 'fragment',
                            model: {
                              text: 'Test',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
];

export const bylineWithLink = [
  {
    type: 'contributor',
    model: {
      blocks: [
        {
          type: 'name',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'Single Byline (all values)',
                        blocks: [
                          {
                            type: 'fragment',
                            model: {
                              text: 'Single Byline (all values)',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'role',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'Test',
                        blocks: [
                          {
                            type: 'fragment',
                            model: {
                              text: 'Test',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'link',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'test',
                        blocks: [
                          {
                            type: 'urlLink',
                            model: {
                              text: 'test',
                              locator: 'https://twitter.com/test',
                              blocks: [
                                {
                                  type: 'fragment',
                                  model: {
                                    text: 'test',
                                    attributes: [],
                                  },
                                },
                              ],
                              isExternal: true,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
];

export const bylineWithLinkAndLocation = [
  {
    type: 'contributor',
    model: {
      blocks: [
        {
          type: 'name',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'Single Byline (all values)',
                        blocks: [
                          {
                            type: 'fragment',
                            model: {
                              text: 'Single Byline (all values)',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'role',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'Test',
                        blocks: [
                          {
                            type: 'fragment',
                            model: {
                              text: 'Test',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'link',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'test',
                        blocks: [
                          {
                            type: 'urlLink',
                            model: {
                              text: 'test',
                              locator: 'https://twitter.com/test',
                              blocks: [
                                {
                                  type: 'fragment',
                                  model: {
                                    text: 'test',
                                    attributes: [],
                                  },
                                },
                              ],
                              isExternal: true,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'location',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'London',
                        blocks: [
                          {
                            type: 'fragment',
                            model: {
                              text: 'London',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
];

export const bylineWithPhoto = [
  {
    type: 'contributor',
    model: {
      blocks: [
        {
          type: 'name',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'Clark Kent',
                        blocks: [
                          {
                            type: 'fragment',
                            model: {
                              text: 'Single Byline (all values)',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'role',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'Journalist',
                        blocks: [
                          {
                            type: 'fragment',
                            model: {
                              text: 'Test',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'link',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'superman',
                        blocks: [
                          {
                            type: 'urlLink',
                            model: {
                              text: 'superman',
                              locator: 'https://twitter.com/Superman',
                              blocks: [
                                {
                                  type: 'fragment',
                                  model: {
                                    text: 'test',
                                    attributes: [],
                                  },
                                },
                              ],
                              isExternal: true,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'location',
          model: {
            blocks: [
              {
                type: 'text',
                model: {
                  blocks: [
                    {
                      type: 'paragraph',
                      model: {
                        text: 'Metropolis, US',
                        blocks: [
                          {
                            type: 'fragment',
                            model: {
                              text: 'Metropolis, US',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'image',
          model: {
            blocks: [
              {
                type: 'rawImage',
                model: {
                  width: 640,
                  height: 562,
                  locator:
                    'https://scarletjourney.rutgers.edu/crm/wp-content/uploads/sites/393/2017/12/christopher-reeve-superman.jpg',
                  originCode: 'cpsdevpb',
                },
              },
            ],
          },
        },
      ],
    },
  },
];
