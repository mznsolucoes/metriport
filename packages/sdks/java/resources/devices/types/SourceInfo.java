/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.devices.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.Override;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(
    builder = SourceInfo.Builder.class
)
public final class SourceInfo {
  private final Optional<SourceType> sourceType;

  private final Optional<String> id;

  private final Optional<String> name;

  private final Optional<String> type;

  private SourceInfo(Optional<SourceType> sourceType, Optional<String> id, Optional<String> name,
      Optional<String> type) {
    this.sourceType = sourceType;
    this.id = id;
    this.name = name;
    this.type = type;
  }

  @JsonProperty("source_type")
  public Optional<SourceType> getSourceType() {
    return sourceType;
  }

  @JsonProperty("id")
  public Optional<String> getId() {
    return id;
  }

  @JsonProperty("name")
  public Optional<String> getName() {
    return name;
  }

  @JsonProperty("type")
  public Optional<String> getType() {
    return type;
  }

  @Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof SourceInfo && equalTo((SourceInfo) other);
  }

  private boolean equalTo(SourceInfo other) {
    return sourceType.equals(other.sourceType) && id.equals(other.id) && name.equals(other.name) && type.equals(other.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.sourceType, this.id, this.name, this.type);
  }

  @Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static Builder builder() {
    return new Builder();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder {
    private Optional<SourceType> sourceType = Optional.empty();

    private Optional<String> id = Optional.empty();

    private Optional<String> name = Optional.empty();

    private Optional<String> type = Optional.empty();

    private Builder() {
    }

    public Builder from(SourceInfo other) {
      sourceType(other.getSourceType());
      id(other.getId());
      name(other.getName());
      type(other.getType());
      return this;
    }

    @JsonSetter(
        value = "source_type",
        nulls = Nulls.SKIP
    )
    public Builder sourceType(Optional<SourceType> sourceType) {
      this.sourceType = sourceType;
      return this;
    }

    public Builder sourceType(SourceType sourceType) {
      this.sourceType = Optional.of(sourceType);
      return this;
    }

    @JsonSetter(
        value = "id",
        nulls = Nulls.SKIP
    )
    public Builder id(Optional<String> id) {
      this.id = id;
      return this;
    }

    public Builder id(String id) {
      this.id = Optional.of(id);
      return this;
    }

    @JsonSetter(
        value = "name",
        nulls = Nulls.SKIP
    )
    public Builder name(Optional<String> name) {
      this.name = name;
      return this;
    }

    public Builder name(String name) {
      this.name = Optional.of(name);
      return this;
    }

    @JsonSetter(
        value = "type",
        nulls = Nulls.SKIP
    )
    public Builder type(Optional<String> type) {
      this.type = type;
      return this;
    }

    public Builder type(String type) {
      this.type = Optional.of(type);
      return this;
    }

    public SourceInfo build() {
      return new SourceInfo(sourceType, id, name, type);
    }
  }
}