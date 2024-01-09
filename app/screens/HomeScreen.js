import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToSettings = () => {
    navigation.navigate("SettingsScreen");
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good Afternoon";
    } else if (currentHour >= 18 && currentHour < 21) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  };

  const greeting = getGreeting();

  // homepage data

  const [homePageData, setHomePageData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://saavn.me/modules?language=hindi,english,bhojpuri"
      );
      const data = await response.json();
      console.log(data); // Log the data to the console
      setHomePageData(data);
    } catch (error) {
      console.error("Error fetching homepage data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ScrollView>
      <View style={{ marginTop: 30, marginHorizontal: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.greeting}>{greeting}</Text>
          <Icon
            style={styles.greeting}
            name="settings"
            onPress={goToSettings}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          {homePageData && (
            <View style={{ marginVertical: 20, flexDirection: "column" }}>
              <Text style={styles.heading}>Trending Now</Text>
              {homePageData.data.trending && (
                <View>
                  <View style={{ flexDirection: "column", gap: 20 }}>
                    {homePageData.data.trending.songs
                      .slice(0, 6)
                      .map((song) => (
                        <View key={song.id} style={styles.songCard}>
                          <View>
                            <Image
                              style={styles.tinyLogo}
                              source={{
                                uri: song.image[2]?.link,
                              }}
                            />
                          </View>
                          <View style={styles.songName}>
                            <Text style={{ fontWeight: "bold" }}>
                              {song.name}
                            </Text>
                            <Text>
                              {song.primaryArtists
                                .map((artist) => artist.name)
                                .join(", ")}
                            </Text>
                          </View>
                        </View>
                      ))}
                  </View>

                  <ScrollView horizontal={true} style={{ marginTop: 40 }}>
                    {homePageData.data.trending.albums.map((album) => (
                      <View
                        style={{
                          marginRight: 20,
                          backgroundColor: "#ddd",
                          padding: 8,
                          borderRadius: 12,
                          width: 150,
                          height: 200,
                        }}
                        key={album.url}
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            gap: 12,
                            justifyContent: "center",
                          }}
                        >
                          <View>
                            <Image
                              style={styles.gridImage}
                              source={{
                                uri: album.image[2]?.link,
                              }}
                            />
                          </View>
                          <View>
                            <Text
                              style={{ fontWeight: "bold" }}
                              numberOfLines={1}
                            >
                              {album.name}
                            </Text>
                            <Text>{album.language}</Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </ScrollView>
                </View>
              )}

              <View style={{ marginTop: 40 }}>
                <Text style={styles.heading}>Top Albums</Text>
                {homePageData.data.albums && (
                  <ScrollView horizontal={true}>
                    {homePageData.data.albums.slice(0, 6).map((album) => (
                      <View
                        style={{
                          marginRight: 20,
                          backgroundColor: "#ddd",
                          padding: 8,
                          borderRadius: 12,
                          width: 150,
                          height: 200,
                        }}
                        key={album.url}
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            gap: 12,
                            justifyContent: "center",
                          }}
                        >
                          <View>
                            <Image
                              style={styles.gridImage}
                              source={{
                                uri: album.image[2]?.link,
                              }}
                            />
                          </View>
                          <View>
                            <Text
                              style={{ fontWeight: "bold" }}
                              numberOfLines={1}
                            >
                              {album.name}
                            </Text>
                            <Text>{album.language}</Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </ScrollView>
                )}
              </View>

              <View style={{ marginTop: 40 }}>
                <Text style={styles.heading}>Top Playlists</Text>
                {homePageData.data.playlists && (
                  <ScrollView horizontal={true}>
                    {homePageData.data.playlists.slice(0, 6).map((playlist) => (
                      <View
                        style={{
                          marginRight: 20,
                          backgroundColor: "#ddd",
                          padding: 8,
                          borderRadius: 12,
                          width: 150,
                          height: 200,
                        }}
                        key={playlist.url}
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            gap: 12,
                            justifyContent: "center",
                          }}
                        >
                          <View>
                            <Image
                              style={styles.gridImage}
                              source={{
                                uri: playlist.image[2]?.link,
                              }}
                            />
                          </View>
                          <View>
                            <Text
                              style={{ fontWeight: "bold" }}
                              numberOfLines={1}
                            >
                              {playlist.title}
                            </Text>
                            <Text>{playlist.subtitle}</Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </ScrollView>
                )}
              </View>

              <View style={{ marginTop: 40 }}>
                <Text style={styles.heading}>Top Charts</Text>
                {homePageData.data.charts && (
                  <ScrollView horizontal={true}>
                    {homePageData.data.charts.slice(0, 6).map((chart) => (
                      <View
                        style={{
                          marginRight: 20,
                          backgroundColor: "#ddd",
                          padding: 8,
                          borderRadius: 12,
                          width: 150,
                          height: 200,
                        }}
                        key={chart.url}
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            gap: 12,
                            justifyContent: "center",
                          }}
                        >
                          <View>
                            <Image
                              style={styles.gridImage}
                              source={{
                                uri: chart.image[2]?.link,
                              }}
                            />
                          </View>
                          <View>
                            <Text
                              style={{ fontWeight: "bold" }}
                              numberOfLines={1}
                            >
                              {chart.title}
                            </Text>
                            <Text>{chart.subtitle}</Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </ScrollView>
                )}
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 25,
  },
  heading: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
  },
  songCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  songName: {
    flexDirection: "column",
  },
  gridImage: {
    width: "100%",
    height: 125,
    borderRadius: 12,
  },
});

export default HomeScreen;
